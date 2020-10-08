const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    // write your solution here

    let arr = [];
    let arrFound = [];
    let n = expr.length / 10; //длина строки в декодированных символах
    for (let i = 0; i < n; i++) {
        arr[i] = expr.substring(0, 10); // массив из символов в двоичных числах
        expr = expr.slice(10);
    };
    
    for (let i = 0; i < n; i++) {
        if (arr[i] === "**********") {
          arrFound[i] = " ";
        } else {
          arr[i] = arr[i].replace(/10/gi, ".").replace(/11/gi, "-").replace(/00/gi, ''); //замена строки на .-
          let k = arr[i];
          arrFound[i] = MORSE_TABLE[k];
        };
      };


    return arrFound.join("");
}

module.exports = {
    decode
}


