const asyncHandler = require('express-async-handler')
const User = require('../models/user')
import generateToken from "../utils/generateToken.js";




const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});


const registerUser = asyncHandler (async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error("User already exists!!")
    }

    const user = await user.Create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("User not found");
      }
})

module.exports = {registerUser, authUser}