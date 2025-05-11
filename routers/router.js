import express from "express";
import { signupController } from "../controllers/signup.controller.js";
import { loginController } from "../controllers/login.controller.js";

const router = express.Router();

router.post("/register", signupController);
router.post("/login", loginController);



export default router;