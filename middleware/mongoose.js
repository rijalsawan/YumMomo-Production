import mongoose from "mongoose";
// require("dotenv").config();

const connectDb = (handler) => async (req, res) => {
  console.log(mongoose.connections);
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(process.env.MONGO_URI);
  return handler(req, res);
};

export default connectDb;
