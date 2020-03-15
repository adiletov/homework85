const express = require('express');
const TrackHistory = require('../modules/trackHistory');
const auth = require('../middleware/auth');
const router = express.Router();



router.post('/', auth, async (req,res)=>{
    const user = req.user;

    const trackHistory = {
        userId: user._id,
        trackId: req.body.track,
        date: new Date()
    };

    const newTrackHistory = new TrackHistory(trackHistory);

    try{
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