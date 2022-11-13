const express = require("express");
require("dotenv").config();
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(cors());

//apis
app.get("/", (req, res) => {
	res.status(200).json("Hello World!");
});

port = process.env.SERVER_PORT; // ||3000
app.listen(port, () => {
	console.log(`port is running on ${port}`);
});
