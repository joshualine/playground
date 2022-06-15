function isPrime(num){
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

//Selectors
const number = document.getElementById("primeInput");
const send = document.getElementById("send");
const result = document.getElementById("result");


function show() {
    let numberAgain = number.value
    let result2 = isPrime(numberAgain);
    result.innerHTML = result2
}

// Adding Event listener
send.addEventListener('click',
    show
)
