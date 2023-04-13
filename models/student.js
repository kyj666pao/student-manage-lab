import mongoose from "mongoose";

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 18,
    max: [99, "Too old in this school"],
  },
  scholarship: {
    type: Number,
    min: 0,
    max: [5000, "Over the limit of scholarship"],
  },
});

const Student = mongoose.model("Student", studentSchema);

// let data = Student.findOne({name: "Jerry"})
// console.log("Data: ", data.age)

export {
    Student
}
