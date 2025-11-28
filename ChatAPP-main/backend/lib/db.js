import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("✅ MongoDB connected"));
    mongoose.connection.on("error", (err) => console.error("❌ MongoDB error:", err));

    // ✅ Don't append /chat-app manually — your URI already includes DB name in MongoDB Atlas
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};
