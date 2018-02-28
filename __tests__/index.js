import isUrlNextJsPage from "../lib/is-url-nextjs-page";

describe("isUrlNextJsPage function", () => {
  test("isUrlNextJsPage is a function", () => {
    expect(typeof isUrlNextJsPage).toBe("function");
  });
});

describe("isUrlNextJsPage works correctly", () => {
  test("isUrlNextJsPage returns true for a valid nextjs path which doesn't have .js extension", () => {
    expect(isUrlNextJsPage("http://example.com/_next/1823/page/one")).toBe(
      true
    );
  });
  test("isUrlNextJsPage returns true for a valid nextjs path which has .js extension ", () => {
    expect(isUrlNextJsPage("http://example.com/_next/1823/page/one.js")).toBe(
      true
    );
  });
  test("isUrlNextJsPage returns false for an invalid nextjs path which has .js extension ", () => {
    expect(isUrlNextJsPage("http://example.com/_next/1823/index.js")).toBe(
      false
    );
  });
  test("isUrlNextJsPage returns false for an invalid nextjs path which doesn't have .js extension ", () => {
    expect(isUrlNextJsPage("http://example.com/_next/1823/index")).toBe(false);
  });
});
