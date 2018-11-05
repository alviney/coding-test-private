const Lyrics = require("./lyrics");

test("first test", () => {
  expect(new Lyrics().calculate(1)).toBe(1);
});

test("second test", () => {
  expect(new Lyrics().calculate(2)).toBe(2);
});

test("third test", () => {
  expect(new Lyrics().calculate(3)).toBe(3);
});