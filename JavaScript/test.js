const fs = require("fs");
const [n, m] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

function findMissSunday(n, m) {
  if (n > m) {
    return n - 7;
  }

  const daysPrev = m + 14 - n;
  let missed = n - 7;
  if (missed <= 0) missed += daysPrev;
  return missed;
}

console.log(findMissSunday(n, m).toString());

console.log(findMissSunday(27, 13)); //Этот месяц
console.log(findMissSunday(6, 22)); //Дата в месяце, в котором 30 дней
console.log(findMissSunday(8, 25)); //Дата в месяце, в котором 31 день

const fs = require("fs");
const s = fs.readFileSync(0, "utf8").trim();

function countAbcTriplets(str) {
  str = str.toLowerCase();

  let amountOfA = 0;
  let amountOfAB = 0;
  let amountOfABC = 0;

  for (let index = 0; index < str.length; index++) {
    const currentChar = str[index];

    if (currentChar === "a") {
      amountOfA++;
    } else if (currentChar === "b") {
      amountOfAB += amountOfA;
    } else if (currentChar === "c") {
      amountOfABC += amountOfAB;
    }
  }

  return amountOfABC;
}

console.log(countAbcTriplets(s).toString());

const fs = require("fs");
const raw = fs.readFileSync(0, "utf8").trim().split(/\s+/);
const N = Number(raw[0]);
const S = raw[1];

function solve(N, S) {
  const nodes = new Array(N + 1);

  nodes[0] = { value: 0, prev: null, next: null };

  for (let i = 1; i <= N; i++) {
    const command = S[i - 1];
    const prevNode = nodes[i - 1];

    const newNode = { value: i, prev: null, next: null };
    nodes[i] = newNode;

    if (command === "R") {
      const oldNext = prevNode.next;
      newNode.next = oldNext;
      newNode.prev = prevNode;
      prevNode.next = newNode;
      if (oldNext) oldNext.prev = newNode;
    } else {
      const oldPrev = prevNode.prev;
      newNode.prev = oldPrev;
      newNode.next = prevNode;
      prevNode.prev = newNode;
      if (oldPrev) oldPrev.next = newNode;
    }
  }

  let head = nodes[0];
  while (head.prev) head = head.prev;

  const res = [];
  for (let cur = head; cur; cur = cur.next) res.push(cur.value);
  return res.join(" ");
}

console.log(solve(N, S));
