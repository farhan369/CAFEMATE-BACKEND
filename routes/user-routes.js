import express from "express"
import { createUser, login } from "../controller/user-controller.js";

const userRoutes = express.Router();

userRoutes.post("/signup",createUser);
userRoutes.post("/login",login);

export default userRoutes;