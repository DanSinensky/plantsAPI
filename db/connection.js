import mongoose from "mongoose";
import chalk from "chalk";

const connectionString = process.env.DB_URL || 'mongodb://localhost/plantAPI'

mongoose.set("returnOriginal", false);

mongoose.connect(connectionString, { useNewUrlParser: true, dbName: "plants" }).catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;