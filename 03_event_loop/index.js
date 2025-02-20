function fun1() {
  setTimeout(() => {
    console.log("I am setTimeOut");
  }, 0);

  // run's first in asynchrnous task
  process.nextTick(() => console.log("I am process 1"));
  setTimeout(() => console.log("I am set immediate")); // if we place 0 ms time in settimeout  it will print like follows
  //     I am fun2
  // I am fun3
  // I am process 1
  // I am setTimeOut
  // I am set immediate
}

function fun2() {
  console.log("I am fun2");
}

function fun3() {
  console.log("I am fun3");
}

fun1();
fun2();
fun3();
