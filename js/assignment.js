"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findSmallestNumber(arr) {
    for(let i = 0; i < arr.length; i++) {
    return smallestNumberElement.innerText = Math.min(...arr);
    };
};

function findLargestNumber(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    };
    let largest = Math.max(...newArr);
    console.log(newArr);
    return largestNumberElement.innerText = largest;
};

function findAverage() {
    let sum = 0;
    for( let i = 0; i < myNumbers.length; i++) {
        sum += myNumbers[i];
    };
    return averageNumberElement.innerText = sum / myNumbers.length;
};

function render() {
    findSmallestNumber(myNumbers);
    findLargestNumber(myNumbers);
    findAverage();
};

submissionBtn.addEventListener("click", function(){
    render();
});