const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { todo } = require("./models/todo");

const database = (module.exports = () => {
  try {
    mongoose.connect(
      "mongodb+srv://xyz1233214321:gTwzZESil5xCx4m8@cluster0.j5xz0ab.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connection Success");
  } catch (err) {
    console.log(error);
    console.log("cant connect");
  }
});

database();
let id = 0;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.get("/", async (req, res) => {
  const da = await todo.find();
  for (i = 0; i < da.length; i++) console.log(da[i].name);
  res.send("My server");
});

const data = async (req, res) => {
  const ans = await todo.create({
    name: req.body.name,
    id: id,
  });
  id++;
  return ans;
};
app.post("/", async (req, res) => {
  const ans = await data(req, res);
  console.log(ans);
  res.status(201);
  res.redirect("/");
});

app.delete("/delete", async (req, res) => {
  try {
    const blog = await todo.deleteMany({ name: req.body.name });
  } catch (err) {
    console.log("No data ");
  }
  res.redirect("/");
});
app.listen(4000, () => {
  console.log("This works");
});
