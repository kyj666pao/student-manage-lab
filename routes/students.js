import { Router } from "express";
// import { Student } from "../models/student.js";
import * as studentsCtrl from "../controllers/students.js"

const router = Router();

// GET localhost:3000/users

router.get("/", studentsCtrl.index)

router.get("/new", studentsCtrl.new)

router.post("/new", studentsCtrl.create)

router.get("/:studentid", studentsCtrl.show)

router.delete("/:studentid", studentsCtrl.delete)

router.get("/edit/:studentid", studentsCtrl.edit)

router.put("/edit/:studentid", studentsCtrl.update)


export { router };
