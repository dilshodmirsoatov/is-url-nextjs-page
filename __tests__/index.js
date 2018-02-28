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

  it("fail urls", () => {
    const urls = [
      "http://example.com/_next/1823/index.h",
      "http://example.com/_next/index.h",
      "http://example.com/_next/123/pag/index.h",
      "http://example.com/_next/123/nextpage/index.h",
      "/_next/123/nextpage/index.h",
      "https://example.com/_next/ab123ab/page/",
      "https://example.com/_next/ab123ab/page/index.j",
      "https://example.com/_next/ab123ab/page/$index.x",
      "https://example.com/_next/ab123ab/page/index.m"
    ];
    urls.forEach(url => {
      expect(isUrlNextJsPage(url)).toBe(false);
    });
  });

  it("success urls", () => {
    const urls = [
      "/_next/123/page/index.js",
      "/_next/123/page/index",
      "https://example.com/_next/123/page/index",
      "https://example.com/_next/123/page/index.js",
      "https://example.com/_next/123ab/page/index.js",
      "https://example.com/_next/ab123ab/page/index.js",
      "https://example.com/_next/ab123ab/page/index-123.js",
      "https://example.com/_next/ab123ab/page/index_123.js",
      "https://example.com/_next/ab123ab/page/$index_123.js",
      "https://example.com/_next/ab123ab/page/$index_123",
      "https://example.com/_next/ab123ab/page/index-home_test12a",
      "https://example.com/_next/ab123ab/page/_$index_123.js"
    ];
    urls.forEach(url => {
      expect(isUrlNextJsPage(url)).toBe(true);
    });
  });
});
