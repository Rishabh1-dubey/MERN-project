import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

//-------------signup logic-----------------------------
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(401).json({
        message: "invalid user",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User already exist",
        success: false,
      });
    }
    const hasedPassword = await bcryptjs.hash(password, 12);

    await User.create({
      name,
      email,
      password: hasedPassword,
      //because we gave a schema inthe name of password so we can not directly give the hashed value
    });
    return res.status(200).json({
      message: "Account created Successfully",
      success:true,
      user
      
    });
  } catch (error) {
    console.log(error);
  }
};

export default userRegister;


//------------------logout-------------------------

export const logOut = async (req, res) => {
  res
    .status(200)
    .cookie("token", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      message: "User logout Successfully",
      success: true,
    });
};

//----------------signin------------------

export const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "INvalid email or Password",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({
        message: "Invalid email or Password",
        success: "false",
      });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      res
        .status(401)
        .json({ message: "invalid email or password", success: "false" });
    }

    //for tokenData
    const tokenData = {
      id: user._id,
    };
    //for token genration
    const token = await jwt.sign(tokenData, JWT_SECRET, { expiresIn: "1d" });
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        token,
        message: `Welcome back ${user.name} `,
        user,
        success: true
      });
  } catch (error) {}
};
