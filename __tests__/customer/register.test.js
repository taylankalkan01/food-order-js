const request = require("supertest");
const baseURL = "http://localhost:3000/api";
// const mongoose = require("mongoose");
// const Customer = require("../../models/Customer");

// jest.setTimeout(50000);

// beforeAll(async () => {
// 	const url = process.env.MONGO_URI;
// 	await mongoose.connect(url, { useNewUrlParser: true });
// });
// // Cleans up database between each test
// afterEach(async () => {
// 	await Customer.deleteMany();
// });

// afterAll(async () => {
// 	// Removes the User collection
// 	await Customer.drop();
// 	await mongoose.connection.close();
// });

describe("customer register api", () => {
	// it("should return status 400 if validation is not correct",async()=>{
	// })
	// it("should return error message if validation is not correct",async()=>{
	// })
	// it("should return status 400 if email exist in db",async()=>{
	// })
	// it("should return error message if email exist in db",async()=>{
	// })
	// it("should return 201 if user created", async (done) => {
	// 	const data = {
	// 		fullName: "test1",
	// 		email: "test1@gmail.com",
	// 		phone: "5555555555",
	// 		password: "test1",
	// 	};
	// 	const response = await request(baseURL)
	// 		.post("/auth/customer/register")
	// 		.send(data);
	// 	expect(response.statusCode).toEqual(201);
	// });
	// it("should return json data", async (done) => {
	// 	const data = {
	// 		fullName: "test1",
	// 		email: "test1@gmail.com",
	// 		phone: "5555555555",
	// 		password: "test1",
	// 	};
	// 	const response = await request(baseURL)
	// 		.post("/auth/customer/register")
	// 		.send(data);
	// 	expect(response.body).toEqual(data);
	// });
	// it("should return message if user created",async()=>{
	// })
});
