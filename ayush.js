const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

// Insert a document
User.create({ name: "Bob", age: 30 }).then(() => console.log("User Added"));

// Find all users
User.find().then(users => console.log(users));
