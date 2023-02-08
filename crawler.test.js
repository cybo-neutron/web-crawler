const { test, expect } = require("@jest/globals");

const { normalizeURL } = require("./crawler");

test("noramalize url", () => {
  const url = normalizeURL("url");
  //   expect(url, "url");
  expect(url).toEqual("url");
});
