import express  from "express"
// const { userRegister } = require("../controllers/userRegister");
import userRegister, { logOut, Signin } from "../controllers/userRegister.js"



const router = express.Router();

router.route("/signup").post(userRegister);
router.route("/signin").post(Signin);
router.route("/logout").get(logOut);

export default router;
