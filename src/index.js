//
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("what's your name?"));

//
export function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello Carson!"));

//
export let calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

console.log(calculator.add(3, 5));
console.log(calculator.subtract(3, 5));
console.log(calculator.divide(3, 5));
console.log(calculator.multiply(3, 5));

//
export function caesarCipher(str, shiftIndex) {
 const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXZY";
 const positiveShift = Math.abs(shiftIndex) % 26;
 let cipher = "";

 for (let i = 0; i < str.length; i++) {
  let char = str[i];
  let index = alphabet.indexOf(char.toUpperCase());

  // If character is not in the alphabet, keep it unchanged
  if (index === -1) {
    cipher += char;
    continue;
  }

  let shiftedIndex = (index + positiveShift) % 26;
  let shiftedChar = alphabet.charAt(shiftedIndex);

  // Preserve the case of the original character
  if (char === char.toLowerCase()) {
    cipher += shiftedChar.toLowerCase();
  } else {
    cipher += shiftedChar;
  }
 }

 return cipher;
}

console.log(caesarCipher("Bang!", -5));
console.log(caesarCipher("What's your name?", 15));

// 
function analyzeArray(arr) {
  if (Array.isArray(arr)) {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;

    // Average Calculation, Minimum, Maximum
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
    }

    const average = sum / arr.length;

    return {
      average: average,
      min: min,
      max: max,
      length: arr.length
    };
  }
}

console.log(analyzeArray([3, 6, 9]));