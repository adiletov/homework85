const express = require('express');
const User = require('../modules/user');
const bcrypt = require('bcrypt');
const router = express.Router();


router.get('/', async (req, res) => {
    const user = await User.find();
    res.send(user)
});

router.post('/', async (req, res) => {
    const username = await User.findOne({username: req.body.username});
    if (username){
        res.status(401).send({username: 'Такой пользователь существует'})
    }else {


        const user = new User(req.body);
        try {
            await user.generateToken();
            await user.save();
            res.send(user)
        } catch (e) {
            res.status(404).send({error: "not found"})
        }
    }
});


router.post('/sessions', async (req, res) => {
    const user = await User.findOne({username: req.body.username});

    if (!user) {
        return res.status(400).send({username: 'Username not found '})
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
        return res.status(400).send({password: 'Password in correct'})
    }

    return res.send(user)
});

module.exports = router;