function add(a, b) {
  return a - b;
}

function test(desc, fn) {
  try {
    fn();
    console.log(`${desc}没有通过测试`);
  } catch (e) {
    console.error(e);
    console.log(`${desc}没有通过测试`);
  }
}

function expect(result) {
  return {
    toBe(actual) {
      if (result !== actual) {
        throw new Error(`预期值与实际值不符合 预期: ${actual} 实际: ${result}`);
      }
    },
  };
}
test("3 + 3 = 6", () => {
  expect(add(3, 3)).toBe(6);
});
