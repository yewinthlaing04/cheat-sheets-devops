import express from "express";
import mongoose from "mongoose";
// import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// mongoose connection
const mongoURI =
  process.env.MONGO_URI ||
  "mongodb://root:example@mongo:27017/myapp?authSource=admin";
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

app.get("/", (req, res) => {
  res.send("Hello World from Node.js with Mongoose!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
