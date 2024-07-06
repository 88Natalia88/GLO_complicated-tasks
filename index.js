let arr = ['21536', '58963', '45896', '27896', '15698', '87459', '41023'];

for(let i = 0; i < arr.length; i++){
    let arrNumbers = parseInt(arr[i]);
    let firstDigit = parseInt(arr[i][0]);
    if (firstDigit === 2 || firstDigit === 4) {
        console.log(arrNumbers);
    }
}


function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function getSimpleNumbers() {
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            console.log("Делители этого числа: 1 и " + i);
        }
    }
}

getSimpleNumbers();