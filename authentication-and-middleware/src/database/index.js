import mongoose from "mongoose";
const connectToDB = async () => {
  const connectionURL =
    "mongodb+srv://kushal:kushal@server-actions-and-data.0y2wx.mongodb.net/";

  mongoose
    .connect(connectionURL)
    .then(() => console.log("Connected to DB"))
    .catch((error) => console.log(error));
};

export default connectToDB;
