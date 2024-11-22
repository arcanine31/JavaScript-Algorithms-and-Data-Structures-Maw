const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function palindromeCheck(input){
    if (input === '') {
        alert('Please input a value');
        return;
    }

    let originalInput = input;
    resultDiv.replaceChildren();

    let lowercaseInput = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    
    let palindromeStatus = (lowercaseInput === [...lowercaseInput].reverse().join(''));

    resultDiv.textContent = `${originalInput} ${palindromeStatus ? 'is' : 'is not'} a palindrome.`
}

checkPalindromeBtn.addEventListener('click', function() {
    palindromeCheck(userInput.value);
    userInput.value = '';
  });

userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        palindromeCheck(userInput.value);
        userInput.value = '';
    }
});