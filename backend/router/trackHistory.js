const express = require('express');
const User = require('../modules/user');
const TrackHistory = require('../modules/trackHistory');
const router = express.Router();


router.post('/', async (req,res)=>{

    const AuthorizationHeader = req.get('Authorization');

    if (!AuthorizationHeader){
        return res.status(401).send({error: 'Ой ой что пошло не так!'})
    }

    const [type, token] = AuthorizationHeader.split(' ');

    if (type !== 'Token' || !token){
        return res.status(401).send({error: 'Ой ой что пошо не так!'})
    }

    const user = await User.findOne({token});

    if (!user){
        res.status(401).send({error: 'Unauthorized'})
    }

    const trackHistory = {
        userId: user._id,
        trackId: req.body.track,
        date: new Date()
    };

    const newTrackHistory = new TrackHistory(trackHistory);

    try{
        await user.generateToken();
        await newTrackHistory.save();
        res.send(newTrackHistory)
    }catch (e) {
        return res.status(404).send({error: 'not found'})
    }
});

router.get('/', async (req,res)=>{
    const trackHistory = await TrackHistory.find().populate('userId').populate('trackId');
    res.send(trackHistory)
});

module.exports = router;