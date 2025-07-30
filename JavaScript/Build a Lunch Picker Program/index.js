let lunches = [];

function addLunchToEnd(arr, item) {
  arr.push(item);
  console.log(item + " added to the end of the lunch menu.");
  return arr;
}
addLunchToEnd(lunches, "Apple");
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

function getRandomLunch(arr) {}
