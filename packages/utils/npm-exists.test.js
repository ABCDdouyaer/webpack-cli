"use strict";
const exists = require("./npm-exists").default;

describe("npm-exists", () => {
	it("should successfully existence of a published module", () => {
		exists("webpack-scaffold-demo").then(status => {
			expect(status).toBe(true);
		});
	});

	it("should return false for the existence of a fake module", () => {
		exists("webpack-scaffold-noop").then(status => {
			expect(status).toBe(false);
		});
	});
});
