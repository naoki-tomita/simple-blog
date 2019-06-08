import { isEquals, range } from "../Equals";

Object.prototype.let = function (cb) {
  return cb(this);
}

Array.prototype.let = function(cb) {
  return cb(this);
}

function toString(any) {
  switch(typeof any) {
    case "symbol":
      return any.toString();
    default:
      return JSON.stringify(any);
  }
}

describe("isEquals", () => {
  const symbol1 = Symbol("foo");
  const symbol2 = Symbol("bar");
  const lefts = [undefined, "foo", 100, true, symbol1, null, { foo: "bar" }, [1, 2, 3]];
  const rights = [
    undefined,
    "foo", "bar",
    100, 200,
    true, false,
    symbol1, symbol2,
    null, { foo: "bar" }, { foo: "foo" },
    [1, 2, 3], [2, 4, 6],
  ];
  const tests = lefts.map(left => {
    return rights.map(right => {
      return {
        left,
        right,
        expected: toString(left) === toString(right),
      };
    });
  });
  tests.reduce((prev, current) => [...prev, ...current], []).forEach(({ left, right, expected }) => {
    it(`left: ${toString(left)}, right: ${toString(right)} isEquals should be ${expected}`, () => {
      expect(isEquals(left, right)).toBe(expected);
    });
  });
});

describe("range", () => {
  it("should create range array", () => {
    expect(range(3)).toEqual([0, 1, 2]);
  });
});
