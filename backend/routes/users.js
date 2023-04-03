const express = require("express")
const router = express.Router()
const UserModel = require("../models/Users")

// @route GET api/
// @description tests users route
// @access Public
router.get('/test', async (req,res) => {
  res.send('users route')
})

// @route GET api/login/
// @description login with username password to get JWT
// @access Public
router.get('/login', async (req, res) => {
  const user = await UserModel.findById(req.params.id)
  try {
    const { username, password } = req.body
    if (username != user.username) {
      res.status(404).json({ msg: "No user under was found"})
    }
    if (password != user.password) {
      res.status(404).json({ msg: "Passwords did not match"})
    }
  } catch (error) {
    res.status(404).json({ msg: "Something terrible went wrong"})
  }
})




module.exports = router