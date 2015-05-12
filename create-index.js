var lunr = require("lunr");
var alldocs = require("./alldocs.json");

var index = lunr(function () {
  this.field('title', {boost: 10})
  this.field('text')
  this.ref('url')
});

alldocs.forEach(function(d){index.add(d)});
console.log("var cached = " + JSON.stringify(index) + ";");
