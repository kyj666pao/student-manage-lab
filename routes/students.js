import { Router } from "express";
// import { Student } from "../models/student.js";
import * as studentsCtrl from "../controllers/students.js"

const router = Router();

// GET localhost:3000/users

// router.get("/", function (req, res) => {
//   Student.find({})
//     .then((students) => {
//       res.render("students/index", { students });
//     })
//     .catch((err) => {
//       console.log("Student not accepted.");
//       console.log(err);
//       res.send("student not accept");
//     });
// });
router.get("/", studentsCtrl.index)

// router.get("/new", (req, res) => {
//   res.render("students/new");
// });
router.get("/new", studentsCtrl.new)

// router.post("/new", (req, res) => {
//   // console.log(req.body)
//   // res.send("thank you for submit")
//   Student.create(req.body)
//     .then((student) => {
//       console.log(student);
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.redirect("/");
//     });
// });
router.post("/new", studentsCtrl.create)

// router.get("/:studentid", (req, res) => {
//   let { studentid } = req.params;
//   // try {
//   //   let student = await Student.find( {studentid} );
//   //   if (student !== null) {
//   //     console.log(student)
//   //     res.render("students/show", { student });
//   //   } else {
//   //     res.send("Students is not exist");
//   //   }
//   // } catch (err) {
//   //   console.log(err)
//   //   res.redirect("error")
//   // }

//   Student.findById(studentid)
//   .then(student => {
//     res.render('students/show', {
//       student
//     })
//   })
//   .catch(error => {
//     console.log(error)
//     res.redirect('/students')
//   })
// });
router.get("/:studentid", studentsCtrl.show)


// router.delete("/:studentid", (req, res) => {
//   let { studentid } = req.params;
//   Student.findByIdAndDelete(studentid)
//   .then(student => {
//     res.redirect('/students')
//   })
//   .catch(error => {
//     console.log(error)
//     res.redirect('/students')
//   })
// })
router.delete("/:studentid", studentsCtrl.delete)

// router.get("/edit/:studentid", (req, res) => {
//   let { studentid } = req.params;
//   Student.findById(studentid)
//   .then(student => {
//     res.render("students/edit", {
//       student
//     })
//   })
//   .catch(error => {
//     console.log(error)
//     res.redirect('/students')
//   })
// })
router.get("/edit/:studentid", studentsCtrl.edit)

// router.put("/edit/:studentid", (req, res) => {
//   let { studentid } = req.params;
//   Student.findByIdAndUpdate(studentid, req.body, {new: true})
//   .then(student => {
//     res.redirect(`/students/${student._id}`)
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect("/students")
//   })
// })
router.put("/edit/:studentid", studentsCtrl.update)


export { router };
