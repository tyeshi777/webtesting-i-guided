const calculator = require("./calculator.js");

// // test away!
// it("runs the test", () => {
//   // arrange - set up
//   const expected = true;
//   // run -
//   const actual = true;
//   // assert - verify
//   expected(actual).toBe(expected)
// })

describe("calculator.js", () => {
  describe("add() method", () => {
    //add two numbers
    it("should return the sum of two numbers", () => {
      //toBe is a matcher.
      //can have multiple expects as long as they test the same thing.
      expect(calculator.add(2, 2)).toBe(4);
      expect(calculator.add(2, 1)).toBe(3);
      expect(calculator.add(0, 1)).toBe(1);
    });
    it("should return 0 when called without values", () => {
      expect(calculator.add()).toBe(0);
    });
    it("should return the number if only one value is passed", () => {
      const expected = 100;

      const result = calculator.add(100);

      expect(result).toBe(expected);
    });
    it("should handle an array of numbers", () => {
      expect(calculator.add([1, 2, 3])).toEqual(6);
    });
  });
});
