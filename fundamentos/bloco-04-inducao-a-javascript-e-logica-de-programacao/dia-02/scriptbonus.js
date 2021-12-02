/* 1x1 */
/* let array = [5, 2, 9, 1, 4, 8, 3, 7, 6]
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
console.log(array)

/* 2x1 */
/* let array = [5, 2, 9, 1, 4, 8, 3, 7, 6]
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
console.log(array) */ 

/* 3x1 */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray); */

/* ou */

let array = [5, 2, 9, 1, 4, 8, 3, 7, 6]
let arrayMultiploDoAnterior = []
for (let index = 0, index2 = 1; index < array.length, index2 < array.length + 1; index += 1, index2 += 1) {
    if (index2 < array.length) {
    arrayMultiploDoAnterior.push(array[index] * array[index2]);
    } else {
        arrayMultiploDoAnterior.push(array[index] * 2);
    }
}
console.log(arrayMultiploDoAnterior)