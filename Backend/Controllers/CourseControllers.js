import CourseModel from "../Model/CourseModel.js";

// Get all courses
export async function getAllCourse(req, res, next) {
  let courses;
  try {
    courses = await CourseModel.find();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }

  if (!courses || courses.length === 0) {
    return res.status(404).json({ message: "Courses not found" });
  }

  return res.status(200).json({ courses });
}

// Add a new course
export async function addCourse(req, res, next) {
  const { name, description, cost, address } = req.body;

  let course;
  try {
    course = new CourseModel({ name, description, cost, address });
    await course.save();
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }

  if (!course) {
    return res.status(400).send({ message: "Unable to add course" });
  }

  return res.status(201).json({ course });
}

// Get course by ID
export async function getById(req, res, next) {
  const id = req.params.id;

  let course;
  try {
    course = await CourseModel.findById(id);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }

  if (!course) {
    return res.status(404).send({ message: "Course not found" });
  }

  return res.status(200).json({ course });
}

// Update course by ID
export async function updateCourse(req, res, next) {
  const id = req.params.id;
  const { name, description, cost, address } = req.body;

  let course;
  try {
    course = await CourseModel.findByIdAndUpdate(
      id,
      { name, description, cost, address },
      { new: true }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }

  if (!course) {
    return res.status(404).send({ message: "Unable to update course" });
  }

  return res.status(200).json({ course });
}

// Delete course by ID
export async function deleteCourse(req, res, next) {
  const id = req.params.id;

  let course;
  try {
    course = await CourseModel.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }

  if (!course) {
    return res.status(404).send({ message: "Unable to delete course" });
  }

  return res.status(200).json({ message: "Course deleted", course });
}
