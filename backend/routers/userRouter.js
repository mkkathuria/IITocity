import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import mytemplate from "../mytemplate.js";
const userRouter = express.Router();
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({}); // pehle sare user ko delete kr do fir uske bad add kro nhi to agar hm apna page refresh krenge to sare users dobara se insert ho jayenge lekin hmne email vgera main unique true lagya huya hain jiske karan error aa jayega
    const createdUsers = await User.insertMany(mytemplate.users);
    res.send({ createdUsers });
  })
);


userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
          // this token is generated by JSON web token
          // JSON web token generates a hash string that is used for your next request to authenticate
          // this is the way of authenticating and authorizing user
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);
export default userRouter;
