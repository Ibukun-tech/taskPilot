import mongoose from "mongoose";

export const startDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://taskpilot:Ibukun@cluster0.wlgr0bb.mongodb.net/"
    );
    // console.log(res);
    console.log("succesful connected");
  } catch (error) {
    console.log(error);
  }
};
const schema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  isCompleted: { type: Boolean, default: false },
  isImportant: { type: Boolean, default: false },
  userId: String,
});

export const Model = mongoose.model("Model", schema) || mongoose.Model;
