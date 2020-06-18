describe("expect.equal", () => {
  test("TODO 1", () => {
    // TODO 1: to replace "matcher"
    expect(1 + 1).matcher(2);
  });
  test("TODO 2", () => {
    // TODO 2: to replace "matcher"
    expect(0.2 + 0.1).matcher(0.3);
  });
  test("TODO 3", () => {
    // TODO 3: to replace "matcher"
    expect(4).matcher(1);
  });
  test("TODO 4", () => {
    // TODO 4: to replace "matcher"
    const fn = () => {};
    expect(fn).matcher(Function);
  });
  test("TODO 5", () => {
    // TODO 5: to replace "matcher"
    expect(undefined).matcher();
  });
  test("TODO 6", () => {
    // TODO 6: to replace "matcher"
    expect(null).matcher();
  });
  test("TODO 7", () => {
    // TODO 7: to replace "matcher"
    expect(false).matcher();
    expect(0).matcher();
    expect("").matcher();
  });
  test("TODO 8", () => {
    // TODO 8: to replace "matcher"
    expect({ a: 1 }).matcher({ a: 1 });
  });
  test("TODO 9", () => {
    // TODO 9: to replace "expected" value
    class LaCroix {
      constructor(flavor) {
        this.flavor = flavor;
      }
    }
    expect(new LaCroix("lemon")).toEqual(expected);
  });
  test("TODO 10", () => {
    // TODO 10: to replace "expected" value
    expect([1, 2, 3]).toHaveLength(expected);
  });
});
