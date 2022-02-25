function getLatinCharacterList(string) {
  //  console.log(string.split(''));
 return string.split('');
}

//getLatinCharacterList('Hello World');

const latinToMorse = {
    'A':'.-',
    'B':'-...',
    'C':'-.-.',
    'D':'-..',
    'E':'.',
    'F':'..-.',
    'G':'--.',
    'H':'....',
    'I':'..',
    'J':'.---',
    'K':'-.-',
    'L':'.-..',
    'M':'--',
    'N':'-.',
    'O':'---',
    'P':'.--.',
    'Q':'--.-',
    'R':'.-.',
    'S':'...',
    'T':'-',
    'U':'..-',
    'V':'...-',
    'W':'.--',
    'X':'-..-',
    'Y':'-.--',
    'Z':'--..'
};

function translateLatinCharacter(string) {
    let morse=latinToMorse[string];
    if (string==" ") 
    {morse="/";};
    let translation= morse + " ";
    document.getElementById("traduction").innerHTML += translation; 
}

//translateLatinCharacter('A');

function encode(wordToTranslate) {
   document.getElementById("traduction").innerHTML = " ";
   let arrayToTranslate= getLatinCharacterList(wordToTranslate.toUpperCase());
   for (var i = 0; i < arrayToTranslate.length; i++) {
       translateLatinCharacter(arrayToTranslate[i]);
   };

}

//encode("Bonjour Charlotte");

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }

  function getMorseCharacterList(string) {
    //  console.log(string.split(''));
   return string.split(' ');
  }

  function translateMorseCharacter(string) {
    let latin=morseToLatin[string];
    if (string=="/") 
    {latin=" ";};
    let translation= latin;
    document.getElementById("traduction").innerHTML += translation; 
}

function decode(wordToTranslate) {
    document.getElementById("traduction").innerHTML = " ";
    let arrayToTranslate= getMorseCharacterList(wordToTranslate);
    for (var i = 0; i < arrayToTranslate.length; i++) {
        translateMorseCharacter(arrayToTranslate[i]);
    };
 
 }
 
 //decode('-... --- -. .--- --- ..- .-. / -- -.-- .-. .. .- --');

