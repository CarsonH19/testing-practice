import { capitalize } from "./index";
// const { capitalize } = require('./index');

test("should output a string with a capitalized first letter", () => {
  const text = capitalize("hello");
  expect(text).toBe("Hello");
});

// test("should output a string with a capitalized first letter", () => {
//   const text = capitalize("whats's your name?");
//   expect(text).to
// });
