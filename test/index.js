const fs = require("fs");
const path = require("path");
const assert = require("assert").strict;

const babel = require("@babel/core");
const optimizeReactImport = require("../lib/index");

function transform(code) {
	return babel.transformSync(code, {
		plugins: [optimizeReactImport]
	}).code;
}

const fixtures = fs
	.readdirSync(path.resolve(__dirname, "./fixtures"))
	.filter(dn => dn !== "." && dn !== "..")
	.map(dn => ({
		title: dn,
		src: fs.readFileSync(
			path.resolve(__dirname, "./fixtures", dn, "./input.js"),
			"utf8"
		),
		expect: fs.readFileSync(
			path.resolve(__dirname, "./fixtures", dn, "./output.js"),
			"utf8"
		)
	}));

describe("fixtures", function() {
	for (let { title, src, expect } of fixtures) {
		it(title, function() {
			assert.equal(transform(src), expect);
		});
	}
});
