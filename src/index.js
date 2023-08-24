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
    function func(string) {
        if (string === "**********") {
          return " "
        }
        const dec = {
            "00": "",
            "11": "-",
            "10": ".",
        }
        let result = "";
        let i = 0;
        while (i < 10) {
            result += dec[string[i] + string[i + 1]];
            i = i + 2;
        }
        return result;
    }
    let l = expr.length / 10
    let index;
    let index1 = 0;
    let arr = []
    for (index = 0; index < l; ++index) {
        const str = expr.substr(index1, 10) 
        index1 = index1 + 10
        arr.push(str)
    }

    let index5;
    let char;
    let resulttwo = []; 
    for (index5 = 0; index5 < arr.length; ++index5) {
        char = func(arr[index5])
        resulttwo.push(char)
    }

    let index6;
    let char1;
    let resultthree = []; 
    for (index6 = 0; index6 < resulttwo.length; ++index6) {
        if (resulttwo[index6] === " ") {
            resultthree.push(" ")
        } else {
            char1 = MORSE_TABLE[resulttwo[index6]]
            resultthree.push(char1)
        }
    }
    return resultthree.join("")
}

module.exports = {
    decode
}
