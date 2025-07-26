/* console.log("Hello! I'm your coding fun fact guide!");

let botName = "Juan";
let botLocation = "Spain";
let favoriteLanguage = "Java";

console.log("My name is " + botName + " and I live on " + botLocation + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");

let codingFact = "I like swim " + favoriteLanguage;
console.log(codingFact);

codingFact = "Bears beets batlestar Galaxy " + favoriteLanguage;
console.log(codingFact);

codingFact = "My name is Michael Scott " + favoriteLanguage;
console.log(codingFact);

console.log(
  "It was fun sharing these facts with you. Goodbye! - " +
    botName +
    " from " +
    botLocation +
    "."
);

let adjective = "the office";
let noun = "Jim Halpert";
let verb = "Mocking Dwight";
let place = "office Dunder Mifflin";
let adjective2 = "HR Tobby";
let noun2 = "Try to friend with Michael Scott";
let firstStory =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun +
  " who loved to eat " +
  noun2 +
  "." +
  " The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";
console.log("First story: " + firstStory);

adjective = "Attack on titan";
noun = "Erren Yegger";
verb = "Starting be a attack titan";
place = "Sigansina";
adjective2 = "Mickasa Ackerman";
noun2 = "Kill Erren Yegger";
let secondStory =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun +
  "  who \nloved to eat " +
  noun2 +
  "." +
  " The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";
console.log("Second story: " + secondStory);

const hello = "hello";
console.log(hello);
// hello = 1234567890123456789012345678901234567890n;
console.log(hello);
console.log(typeof hello + " " + typeof "фыв");
console.log(hello[hello.length - 1]);
let firstWord = "mail";
let secondWord = "telephone";
let thirdWord = "data1";
let funcWord =
  firstWord[firstWord.length - 1] +
  secondWord[firstWord.length - 1] +
  thirdWord[firstWord.length - 1];
console.log(funcWord);
firstWord[4] = "a";
console.log(funcWord);

let secondStory2 = `Once upon a time, there was a(n) ${adjective} ${noun} who 
loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

console.log(`Second story: ${secondStory2}`);
console.log(secondStory2.indexOf("upon", 10));

let str = "upon upon upon";
let pos = -1;

while ((pos = str.indexOf("upon", pos + 1)) !== -1) {
  console.log("Нашёл at index:", pos);
} */

let name2 = "eco buste";
let name4 = "go home";
let result = name2.includes("eco");
console.log(result);
console.log(
  name2[1].toLocaleUpperCase() + name2.slice(2, 3).toLocaleUpperCase()
);
console.log(name2.replace("eco", name4));
console.log(name2.replaceAll("e", "big"));
console.log(name2.split(""));
/* let name3 = name2.split("");
name3.forEach((char, index) => {
  console.log(`${char}:${index}`);
}); */

name2 = "eco buster lololo";
let name5 = (name2 + " ").repeat(5);
console.log(name5);
let score = 5;
score = 140 >= 1211;
console.log(score);

function areYouPlayingBanjo(name) {
  if (name.charAt(0).toLowerCase() === "r") {
    name = name + " plays banjo";
  } else {
    name = name + " does not play banjo";
  }

  // Implement me
  console.log(name);

  return name;
}
