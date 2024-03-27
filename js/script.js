const rowElem = document.querySelector(".row");
console.log(rowElem);






for (let i = 0; i<=100; i++) {
    
    let bgClass;
    if(i % 15 === 0) {
        console.log("FizzBuzz");
        bgClass = "fizzbuzz"

    } else if (i % 3 === 0){
        console.log("Fizz");
        bgClass = "fizz"
    } else if (i % 5 === 0) {
        console.log("Buzz");
        bgClass = "buzz"
    } else {
        console.log(i);
    }

    // const boxFizzBuzz = document.createElement("div");
    // boxFizzBuzz = 
    const boxElem = document.createElement("div");
    boxElem.innerHTML = i;
    boxElem.classList.add("box");
    boxElem.classList.add(bgClass);
    console.log(boxElem);

    rowElem.append(boxElem);
}