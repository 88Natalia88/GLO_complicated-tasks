let num = 266219;
let numString = num.toString();
let numArray = Array.from(numString);
let sum = 1;

for(i = 0; i < numArray.length; i++){
    sum *= parseInt(numArray[i]);
}

let sumDegree = sum**3;
let sumDegreeString = sumDegree.toString();

console.log(sumDegreeString.substring(0, 2));