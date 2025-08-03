import User from "../Model/User.js"

//const createUser = async (req, res) => {
//    const {name, gmail, password} = req.body;
//    try{
//        await User.create({
//            name,
//            gmail,
//            password
//        })
//        res.send({ status: "ok"});
//    } catch (err){
//        res.send({ status: "err"});
//    }
//}
export function createUser(req, res){
 const user = new User({

        name: req.body.name,
        gmail: req.body.gmail,
        password: req.body.password
    }
      
    )
    user.save().then(
      ()=>(
        res.json(
          {
            message: "User created successfully."
          }
        )
      )
    ).catch(
      ()=>{
        res.json(
          {
            message: "Failed to created successfully."
          }
        )
      }
    )
  }

 export async function login(req, res) {
 const { gmail, password } = req.body;

  try {
    const user = await User.findOne({ gmail });

    if (!user) {
      return res.status(404).json({ err: "User Not Found" });
    }

    if (user.password === password) {
      return res.status(200).json({ status: "ok" });
    } else {
      return res.status(401).json({ err: "Incorrect password" });
    }
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ err: "Server Error" });
  }
}
//Login function
//app.post("/login", async(req,res) => {
//    const {gmail, password} = req.body;
//    try{
//        const user = await User.findOne({gmail});
//        if(!user){
//            return res.json({err: "User Not Font"})
//        }
//        if (user.password === password){
//            return res.send({status: "ok"})
//        }else{
//            return res.json({err: "incorrect password" })
//        }
//    }catch(err){
//        console.error(err)
//        res.status(500).json({err:"server Err"})    
//    }
//})


// previouse funtion , just keep it for reference

//const User = require("../Model/CourseModel");
//const getAllCourse = async (req, res, next) => {
//    let courses;
//    //Get all courses
//    try{
//      courses =await User.find();
//    }catch (err) {
//        console.log(err);
//    }
//    //not found
//    if(!courses){
//        return res.status(404).json({message:"User not found"})
//    }
  
//// Disply all courses
//return res.status(200).json({ courses });

//}

////data Insert
//const addCourse = async (req, res, next) => {

//    const {name, description, cost, address} = req.body;
//    let courses;

//    try{
//      courses = new User({name, description, cost, address});
//        await courses.save();
//    }catch (err) {
//        console.log(err);
//    }
//  // not insert courses
//  if(!courses){
//    return res.status(404).send({message:"unable to add courses"});
//  }
//  return res.status(200).json({ courses });

//}

////Get by Id
//const getById = async (req, res, next) => {
//    const id = req.params.id;

//    let user;

//    try{
//        user = await User.findById(id);
//    }catch (err) {
//        console.log(err);
//    }
//  // not available courses
//  if(!user){
//    return res.status(404).send({message:"user not found"});
//  }
//  return res.status(200).json({ user });

//}

////updateUser details
//const updateCourse = async (req, res, next) => {
//    const id = req.params.id;
//    const {name, description, cost, address} = req.body;

//    let courses;

//    try{
//      courses = await User.findByIdAndUpdate(id,
//        {name:name, description:description, cost:cost, address:address});
//        courses.save();
//  }catch (err) {
//      console.log(err);
//  }
//  // not available courses
//  if(!courses){
//    return res.status(404).send({message:"Unable to Update User Details"});
//  }
//  return res.status(200).json({ courses });

//}

////updateUser details
//const deleteUser = async (req, res, next) => {
//  const id = req.params.id;

//  let user;

//  try{
//    user = await User.findByIdAndDelete(id);
//}catch (err) {
//    console.log(err);
//}
//// not available courses
//if(!user){
//  return res.status(404).send({message:"Unable to Delete User Details"});
//}
//return res.status(200).json({ user });

//}

//exports.getAllCourse = getAllCourse;
//exports.addCourse = addCourse;
//exports.getById = getById;
//exports.updateCourse = updateCourse;
//exports.deleteUser = deleteUser;

