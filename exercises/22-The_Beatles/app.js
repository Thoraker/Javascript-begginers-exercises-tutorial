function sing() {
    let lyrics = "let it be, ";
    for (let i = 0; i <= 9; i++){
        if(i===3) lyrics += 'whisper words of wisdom, ';
        else if (i===9) lyrics += 'there will be an answer, let it be';
        else lyrics += 'let it be, ';
    }
    return lyrics;
}

//Your code above ^^^

console.log(sing());