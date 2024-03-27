const rowElem = document.querySelector(".row");
console.log(rowElem);
// let fizzBuzzBox = "FizzBuzz";
// let fizzBox = "Fizz";
// let buzzBox ="Buzz"





for (let i = 1; i<=100; i++) {
    
    let bgClass;
    let txtResult;
    if(i % 15 === 0) {
        console.log("FizzBuzz");
        txtResult = "FizzBuzz";
        bgClass = "fizzbuzz"

    } else if (i % 3 === 0){
        console.log("Fizz");
        txtResult = "Fizz";
        bgClass = "fizz"
    } else if (i % 5 === 0) {
        console.log("Buzz");
        txtResult = "Buzz";
        bgClass = "buzz"
    } else {
        console.log(i);
        txtResult = i;
    }

    // const boxFizzBuzz = document.createElement("div");
    // boxFizzBuzz = 
    const boxResult = `<div class="box ${bgClass}">${txtResult}</div>`
    rowElem.innerHTML += boxResult;
}