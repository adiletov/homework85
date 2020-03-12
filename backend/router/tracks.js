const express = require('express');
const router = express.Router();
const Track = require('../modules/Track');


router.get('/', async (req, res) => {
    if (req.query.album) {
        const tracks = await Track.find({album: req.query.album}).sort('number');
        return res.send(tracks)
    } else if (req.query.artist) {
        const tracks = await Track.find().populate('album');
        let track = [];
        tracks.map(obj => {
            if (String(obj.album.artist) === req.query.artist) {
                track.push(obj);
            }
        });

        return res.send(track)
    } else {
        const tracks = await Track.find().populate('album');
        return res.send(tracks)
    }

});

router.post('/', async (req, res) => {
    const track = new Track(req.body);
    try {
        await track.addNumber();
        await track.save();
        res.send(track._id)
    } catch (e) {
        res.status(404).send(e)
    }
});

router.delete('/:id', async (req, res) => {
    await Track.deleteOne({_id: req.params.id});
    res.send('delete')
});

module.exports = router;