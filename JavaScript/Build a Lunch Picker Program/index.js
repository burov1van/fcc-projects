let lunches = [];

function addLunchToEnd(arr, item) {
  arr.push(item);
  console.log(item + " added to the end of the lunch menu.");
  return arr;
}
addLunchToEnd(lunches, "Apple");
console.log(lunches);

addLunchToEnd(lunches, "Pizza");
addLunchToEnd(lunches, "Burger");
addLunchToEnd(lunches, "Sushi");
console.log(lunches);

function addLunchToStart(arr, item) {
  arr.unshift(item);
  console.log(item + " added to the start of the lunch menu.");
  return arr;
}
addLunchToStart(lunches, "Orange");
console.log(lunches);

function removeLastLunch(arr) {
  if (arr.length === 0) {
    return console.log("No lunches to remove.");
  } else {
    const arrRemoved = arr.pop();
    console.log(arrRemoved + " removed from the end of the lunch menu.");
  }
  return arr;
}

removeLastLunch(lunches);
console.log(lunches);

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    return console.log("No lunches to remove.");
  } else {
    const arrRemoved = arr.shift();
    console.log(arrRemoved + " removed from the start of the lunch menu.");
  }
  return arr;
}

removeFirstLunch(lunches);
console.log(lunches);

function getRandomLunch(arr) {
  if (arr.length > 0) {
    let randomFood = arr[Math.floor(Math.random() * arr.length)];
    console.log(`Randomly selected lunch: ${randomFood}`);
  } else {
    console.log("No lunches available.");
  }
}

getRandomLunch(lunches);
console.log(lunches);

function showLunchMenu(arr) {
  if (!arr.length) {
    console.log("The menu is empty.");
  }

  return console.log("Menu items: " + arr.join(", "));
}

showLunchMenu(lunches);
console.log(lunches);
