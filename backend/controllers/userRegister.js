import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";

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
    });
  } catch (error) {
    console.log(error);
  }
};
export default userRegister;
