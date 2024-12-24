import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://kushal:kushal@server-actions-and-data.0y2wx.mongodb.net/";

  mongoose
    .connect(url)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
};

export default connectToDB;
