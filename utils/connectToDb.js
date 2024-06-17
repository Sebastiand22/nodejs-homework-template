import mongoose from "mongoose";

async function connectToDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://ssebastiandd:goit2024@sebastiandd.ubifwe2.mongodb.net/?retryWrites=true&w=majority&appName=Sebastiandd"
    );
    console.log("Database connection successful");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connectToDb;