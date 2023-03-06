import express from "express"
import { userController } from "../controller/user-controller.js";

const userRoutes = express.Router();

userRoutes.post("/signup", userController.createUser);


export default userRoutes;