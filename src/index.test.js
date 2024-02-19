import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

// capitalize tests
test("should output a string with a capitalized first letter", () => {
  const text = capitalize("hello");
  expect(text).toBe("Hello");
});

test("should output a string with a capitalized first letter", () => {
  const text = capitalize("what's your name?");
  expect(text).toBe("What's your name?");
});

test("should output a string with a capitalized first letter", () => {
  const text = capitalize("BANG!");
  expect(text).toBe("BANG!");
});

// reverseString tests
test("should output a reversed string", () => {
  const text = reverseString("Hello");
  expect(text).toBe("olleH");
});

test("should output a reversed string", () => {
  const text = reverseString("!gnaB");
  expect(text).toBe("Bang!");
});

test("should output a reversed string", () => {
  const text = reverseString("What's your name?");
  expect(text).toBe("?eman ruoy s'tahW");
});

// calculator tests
test("should output a calculation", () => {
  const text = calculator.add(9, 11);
  expect(text).toBe(20);
});

test("should output a calculation", () => {
  const text = calculator.subtract(9, 3);
  expect(text).toBe(6);
});

test("should output a calculation", () => {
  const text = calculator.divide(9, 3);
  expect(text).toBe(3);
});

test("should output a calculation", () => {
  const text = calculator.multiply(3, 5);
  expect(text).toBe(15);
});

// caesarCipher tests
test("should output a caesar cipher", () => {
  const text = caesarCipher("hello", 3);
  expect(text).toBe("khoor");
});

test("should output a caesar cipher", () => {
  const text = caesarCipher("Bang!", -5);
  expect(text).toBe("Gfsl!");
});

test("should output a caesar cipher", () => {
  const text = caesarCipher("What's your name?", 15);
  expect(text).toBe("Lwpi'h odjg cpbt?");
});

// analyzeArray
test("should output the average, min, max, and length of an array as an object", () => {
  const object = analyzeArray([3, 6, 9]);
  expect(object).toEqual({
    average: 6,
    min: 3,
    max: 9,
    length: 3
  });
});

test("should output the average, min, max, and length of an array as an object", () => {
  const object = analyzeArray([1, 2, 3, 4, 5, 6]);
  expect(object).toEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6
  });
});

test("should output the average, min, max, and length of an array as an object", () => {
  const object = analyzeArray([-50, -20, 10]);
  expect(object).toEqual({
    average: -20,
    min: -50,
    max: 10,
    length: 3
  });
});
