const textToCheck = 'kAyak ksaYaK';

function checkPalindrome(text){
    let newStr = text.toLowerCase().replace(' ', '');
    return newStr === newStr.split('').reverse().join('');
}

console.log(checkPalindrome(textToCheck));

