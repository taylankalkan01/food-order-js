const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDb connected to "${connect.connection.name}"`);
	} catch (error) {
		console.log("Error: ", error);
		process.exit(1); // kill program
	}
};

module.exports = { connectDB };
