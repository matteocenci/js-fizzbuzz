const rowElem = document.querySelector(".row");
console.log(rowElem);






for (let i = 0; i<=100; i++) {
    
    let bgClass;
    if(i % 15 === 0) {
        console.log("FizzBuzz");

    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}