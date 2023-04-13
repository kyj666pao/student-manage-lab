import { Student } from "../models/student.js";

const index = (req, res) => {
  // res.send('respond with a resource')
  Student.find({})
    .then((students) => {
      res.render("students/index", { students });
    })
    .catch((err) => {
      console.log("Student not accepted.");
      console.log(err);
      res.send("student not accept");
    });
};

const newStudent = (req, res) => {
  res.render("students/new");
};

const create = (req, res) => {
  // console.log(req.body)
  // res.send("thank you for submit")
  Student.create(req.body)
    .then((student) => {
      console.log(student);
      res.redirect("/students");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
};

const show = (req, res) => {
  let { studentid } = req.params;
  Student.findById(studentid)
    .then((student) => {
      res.render("students/show", {
        student,
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/students");
    });
};

const deleteOne = (req, res) => {
  let { studentid } = req.params;
  Student.findByIdAndDelete(studentid)
    .then((student) => {
      res.redirect("/students");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/students");
    });
};

const edit = (req, res) => {
  let { studentid } = req.params;
  Student.findById(studentid)
    .then((student) => {
      res.render("students/edit", {
        student,
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/students");
    });
};

const update = (req, res) => {
  let { studentid } = req.params;
  Student.findByIdAndUpdate(studentid, req.body, { new: true })
    .then((student) => {
      res.redirect(`/students/${student._id}`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/students");
    });
};

export { 
    index, 
    newStudent as new, 
    create, 
    show, 
    deleteOne as delete, 
    edit, 
    update, 
};
