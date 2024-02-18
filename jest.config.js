module.exports = {
  testEnvironment: "node", // or "jsdom" for browser-like environment
  // Add any other Jest config options here
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
