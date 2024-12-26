import { User } from "../models/userSchema.js";

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

    await User.create({
      name,
      email,
      password,
    })
return res.status(200).json({
    message:"Account created Successfully"
})


  } catch (error) {
    console.log(error);
  }
};
export default userRegister
