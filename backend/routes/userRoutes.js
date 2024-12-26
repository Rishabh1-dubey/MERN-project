import express  from "express"
// const { userRegister } = require("../controllers/userRegister");
import userRegister from "../controllers/userRegister.js"



const router = express.Router();

router.route("/register").post(userRegister);

export default router;
