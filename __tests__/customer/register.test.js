const request = require("supertest");
const baseURL = "http://localhost:3000/api";
const mongoose = require("mongoose");
const Customer = require("../../models/Customer");

// jest.setTimeout(50000);

beforeAll(async () => {
  const url =
    "mongodb+srv://admin:admin123@cluster0.r91agvy.mongodb.net/?retryWrites=true&w=majority";
  await mongoose.connect(url, { useNewUrlParser: true });
});
// Cleans up database between each test
afterEach(async () => {
  await Customer.deleteMany();
});

// afterAll(async () => {
// 	// Removes the User collection
// 	await Customer.drop();
// 	await mongoose.connection.close();
// });

describe("customer register api", () => {
  //   it("should return status 400 if fullname validation is not correct",async()=>{
  // 	const data = {
  // 				fullName: "test1",
  // 				email: "test1@gmail.com",
  // 				phone: "5555555555",
  // 				password: "test1",
  // 			};
  //   })
  //   it("should return status 400 if email validation is not correct",async()=>{
  // 	const data = {
  // 				fullName: "test1",
  // 				email: "test1@gmail.com",
  // 				phone: "5555555555",
  // 				password: "test1",
  // 			};
  //   })
  //   it("should return status 400 if phone validation is not correct",async()=>{
  // 	const data = {
  // 				fullName: "test1",
  // 				email: "test1@gmail.com",
  // 				phone: "5555555555",
  // 				password: "test1",
  // 			};
  //   })
  // it("should return error message if validation is not correct",async()=>{
  // })
  // it("should return status 400 if email exist in db",async()=>{
  // })
  // it("should return error message if email exist in db",async()=>{
  // })
  //   it("should return 201 if user created", async () => {
  //     const data = {
  //       fullName: "test1",
  //       email: "test1234@gmail.com",
  //       phone: "5555555555",
  //       password: "test1",
  //     };
  //     const response = await request(baseURL)
  //       .post("/auth/customer/register")
  //       .send(data);
  //     console.log(response);
  //     expect(response.statusCode).toEqual(201);
  //   });
  it("should return json data", async () => {
    const data = {
      fullName: "test1",
      email: "test1434@gmail.com",
      phone: "5555555555",
      password: "test1",
    };
    const response = await request(baseURL)
      .post("/auth/customer/register")
      .send(data);
    console.log(response);
    expect(Object.keys(response.body.data)).toEqual([
      "email",
      "password",
      "fullName",
      "phone",
      "order",
      "_id",
      "cart",
      "createdAt",
      "updatedAt",
    ]);
  });
  it("should return message if user created", async () => {});
});
