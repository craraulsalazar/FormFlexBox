
//Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text";
let waldoRegex = /Waldo/;  //remember this is case sensitive
let result = waldoRegex.test(waldoIsHiding);
//console.log(result);


// Match a literal string with different possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
result = petRegex.test(petRegex);
//console.log(result);

//Ignore case while matching
let myString = "freeCode Camp";
let fccRegex = /code/i;
result = fccRegex.test(myString);
//console.log(result);

//Find one or more matches
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex);
//console.log(humStr.match(huRegex));
//console.log(hugStr.match(huRegex));

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
result = unRegex.test(exampleStr);
//console.log(result);

//Match single character with multiple possibilities
let bgRegex = /b[aiu]g/;
let alphabetRegex = /[a-z]/ig;
let numbersandletters = /[2-6h-s]/ig;
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
result = quoteSample.match(vowelRegex);
result = quoteSample.match(bgRegex);
//console.log(result);

//match characters that occurs one or more times
quoteSample = "3 blind mice.";
let Regex = /[^0-9aeiou]/ig;
result = quoteSample.match(Regex);
console.log(result);