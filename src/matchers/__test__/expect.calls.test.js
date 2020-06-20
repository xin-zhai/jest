function forEach(items, callback) {
  items.forEach((item) => callback(item));
}

test("TODO 11", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([1, 2], mockCallback);

  // TODO 11: add assertion
  expect(mockCallback).toBeCalled();
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(1);
  expect(mockCallback.mock.calls[1][0]).toBe(2);
  expect(mockCallback.mock.results[0].value).toBe(43);
});

test("TODO 12", () => {
  const mockFn = jest.fn();
  mockFn
    .mockReturnValueOnce(42)
    .mockReturnValueOnce("string")
    .mockReturnValue(true);

  // TODO 12: to add "expected" value
  expect(mockFn()).toBe(42);
  expect(mockFn()).toBe("string");
  expect(mockFn()).toBe(true);
});
