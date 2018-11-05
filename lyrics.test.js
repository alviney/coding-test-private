const Lyrics = require("./lyrics");

test("first test", () => {
  expect(new Lyrics().calculate(1)).toBe(1);
});