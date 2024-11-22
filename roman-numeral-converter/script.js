const userInput = document.getElementById('number');
const checkPalindromeBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('output');

// function palindromeCheck(input){
//     if (input === '') {
//         alert('Please input a value');
//         return;
//     }

//     let originalInput = input;
//     resultDiv.replaceChildren();

//     let lowercaseInput = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    
//     let palindromeStatus = (lowercaseInput === [...lowercaseInput].reverse().join(''));

//     resultDiv.textContent = `${originalInput} ${palindromeStatus ? 'is' : 'is not'} a palindrome.`
// }


function romanNumConvert(input){

    // let dataType = typeof input;
    // let message = `Value: ${input}, Data Type: ${dataType}`;
    // // alert(message);

    const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    const thousands = ['', 'M', 'MM', 'MMM']

    let intInput = parseInt(input, 10);
    // let dataType1 = typeof intInput;
    // let message1 = `Value: ${intInput}, Data Type: ${dataType1}`;
    // alert(message1);

    if (input === '') {
        // alert('Please input a value');
        resultDiv.textContent = "Please enter a valid number";
        return;
    } else if (intInput < 1) {
        resultDiv.textContent = "Please enter a number greater than or equal to 1";
        // alert("Please enter a number greater than or equal to 1");
        return;
    } else if (intInput > 3999){
        // alert("Please enter a number less than or equal to 3999")
        resultDiv.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    let x = intInput % 10;
    let y = parseInt(((intInput - x) % 100) / 10);
    let z = parseInt(((intInput - (x + y)) % 1000) / 100);
    let i = parseInt((intInput - (x + y + z)) / 1000);

    let msg = `${x} ${y} ${z} ${i}`;
    alert(msg)


    resultDiv.textContent = `${thousands[i]}${hundreds[z]}${tens[y]}${ones[x]}`;
    // let convertedInput = 
}

checkPalindromeBtn.addEventListener('click', function() {
    romanNumConvert(userInput.value);
    userInput.value = '';
  });

userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        romanNumConvert(userInput.value);
        userInput.value = '';
    }
});



