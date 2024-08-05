// Constructor fuctions
// technically are regular functions, There are two conventions though:

// They are named with capital letter first.
// They are should be executed only with "new" operator

/*
function User(name) {
    this.name = name;
}

let person = new User("Omi")
console.log(person.name); // Omi
*/
// OR

function User(name) {
    if (!new.target) {
        return new User(name);
    }
    this.name = name;
}

let person = new User("Omi");
console.log(person.name); // Outputs: "Omi"
