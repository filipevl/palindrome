function change_response(element, message, color){
    element.innerHTML = message;
    element.style.display = 'block';
    element.style.backgroundColor = color;
}

function is_palindrome(){
    const word = document.getElementById('word').value;
    const word_reverse = word.split("").reverse().join("");
    var response_block = document.getElementById('response');
    if(word === word_reverse)
        change_response(response_block,"Yes! This word is a palindrome",'green');
    else
        change_response(response_block,"Uou! This word is not a palindrome",'red');
}
