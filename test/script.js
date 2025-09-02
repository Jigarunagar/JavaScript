const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const dbconnect = () => {
  try {
    mongoose.connect(
      "mongodb+srv://jigartest:lPIb12LioyRQVLO0@cluster0.zsieghq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connect mongodb");
  } catch (error) {
    console.log("not mongodb");
  }
};

const Userdtl = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
});

const UserModel = mongoose.model("User", Userdtl);

app.post("/users", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/userall", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const User = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!User) return res.status(404).json({ message: "User not found" });

    await User.save();
    res.status(200).json(User);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


dbconnect();
app.listen(4040, () => {
  console.log("server start");
});
