const express = require('express')
const userRouter = express.Router()
const User = require('../models/User')

userRouter.get('/:user_id', async(req, res) => {
    try {
        const user = await User.findById(req.params.user_id)
        res.json(user)
    } catch (error) {
        res.json({msg: error})
    }
})

userRouter.post('/post-user', async(req, res) => {
    const user = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const savedUser = await user.save()
        res.json(savedUser)
    } catch (error) {
        res.json({msg: error})
    }
}) 

module.exports = userRouter