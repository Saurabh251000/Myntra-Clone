import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectToMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log("error connecting to mongoDB", error.message);
  }
};

export default connectToMongodb;
