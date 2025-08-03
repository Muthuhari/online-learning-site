import express from "express";
import { getAllCourse, addCourse, getById, updateCourse, deleteCourse } from "../Controllers/CourseControllers.js";
const CourseRoutes = express.Router();

CourseRoutes.get("/",getAllCourse);
CourseRoutes.post("/",addCourse);
CourseRoutes.get("/:id",getById);
CourseRoutes.put("/:id",updateCourse);
CourseRoutes.delete("/:id",deleteCourse);

export default CourseRoutes;