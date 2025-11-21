import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  const uri = process.env.MONGO_URL;
  if (!uri) {
    throw new Error(
      'MONGO_URL environment variable is not set. Create a `.env.local` in the project root with `MONGO_URL="<your connection string>"` and restart the dev server.'
    );
  }

  await mongoose.connect(uri);
};
