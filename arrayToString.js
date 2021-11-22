let greetList = ['Hello', ' ', 'Venkat', '!']
console.log((' ').concat(...greetList));

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"


function CountTotalAmountOfMachedWordInaString(str2) {
  let machedWord = 0;
  machedWord = str2.match(/the/gi).length;
  console.log("total finded mached :" , machedWord);
  return machedWord;
}

CountTotalAmountOfMachedWordInaString(sentence);