test("toBe匹配器", () => {
  // toBe  相当于 Object.is
  expect(10).toBe(10);
});
test("toEqual  比较对象", () => {
  const a = {name: 'zs'}
  expect({name: 'zs'}).toEqual(a);
});
