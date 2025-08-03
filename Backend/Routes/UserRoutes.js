import express from "express";
import { createUser, login} from "../Controllers/UserControllers.js";

const UserRoutes = express.Router();

UserRoutes.post("/", createUser);
UserRoutes.post("/login", login);

export default UserRoutes;