const request = require("supertest");
const baseURL = "http://localhost:3000";

describe("test '/' route", () => {
	it("should return 200", async () => {
		const response = await request(baseURL).get("/");
		expect(response.header["content-type"]).toBe(
			"application/json; charset=utf-8"
		);
		expect(response.statusCode).toBe(200);
	});
	it("should return Hello world!", async () => {
		const response = await request(baseURL).get("/");
		expect(response.header["content-type"]).toBe(
			"application/json; charset=utf-8"
		);
		expect(response.text).toBe('"Hello World!"');
	});
});
