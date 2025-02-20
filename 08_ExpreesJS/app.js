const express = require('express');
const app = express();
const phones = require('./data'); // Import phones data

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1> <a href="/api/phone">Phone</a>');
});

// API route to show limited phone details
/*
app.get('/api/phone', (req, res) => {
    const newItems = phones.map((product) => {
        const { id, name, image } = product; // Destructure to pick id, name, image
        return { id, name, image };
    });
    res.json(newItems);
});

// API route to fetch a single phone by ID
app.get('/api/phone/:phoneID', (req, res) => {
    const { phoneID } = req.params;
    const singleProduct = phones.find((product) => product.id === Number(phoneID)); // Convert phoneID to number
    if (!singleProduct) {
        return res.status(404).send('Phone not found');
    }
    res.json(singleProduct);
    console.log(req.params);
});

// API route to show all phones
app.get('/phones', (req, res) => {
    res.json(phones);
});
*/

// user who filtering the result
app.get('/api/v1/query', (req, res) => {
    let sortedPhone = [...phones];
    const {search, limit} = req.query;

    // Filter by search term if provided
    if(search) {
        sortedPhone = sortedPhone.filter((product) => 
            product.name.startsWith(search.toLowerCase())
        );
    }
    
    // Apply limit if provided
    if (limit) {
        const numLimit = Number(limit);
        if(isNaN(numLimit)) {
            return res.status(404).json({error: 'Limit must be a vailid number' });
        }
        sortedPhone = sortedPhone.slice(0, numLimit);
    }
    
    // If No result found
    if (sortedPhone.length === 0) {
        return res.status(404).json({ error: 'No matching products found' });
    }
    res.json(sortedPhone);
});
    
// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
