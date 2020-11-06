let garden;

garden = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

console.assert(lunchCount(garden) === 0,"3x3 array");

garden = [
  [1, 1, 1],
  [0, 1, 1],
  [9, 1, 9],
];

console.assert(lunchCount(garden) === 3,"3x3 array");

garden = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

console.assert(lunchCount(garden) === 9,"3x3 array");

garden = [
  [9, 9, 9, 9],
  [9, 3, 1, 0],
  [9, 1, 4, 2],
  [9, 9, 1, 0],
];

console.assert(lunchCount(garden) === 6,"4x4 array");


garden = [
  [2, 3, 1, 4, 2, 2, 3],
  [2, 3, 0, 4, 0, 3, 0],
  [1, 7, 0, 2, 1, 2, 3],
  [9, 3, 0, 4, 2, 0, 3],
];

console.assert(lunchCount(garden) === 15,);

console.log("All tests ran");
