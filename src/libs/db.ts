import mongoose from 'mongoose';
export const connectToDB = async () => {
  try {
    if (mongoose.connection.readyState > 0) {
      console.log('Already Connected to MongoDB');
      return;
    }
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};
