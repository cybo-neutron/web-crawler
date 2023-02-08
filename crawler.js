const url = require("node:url");

function normalizeURL(uri) {
  return url.parse(uri);
}

const r = normalizeURL("Https://www.google.com/path?query=1");
console.log(r);

module.exports = {
  normalizeURL,
};
