const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = require('../config');
const Artist = require('../modules/Artist');


const storage = config.storage;
const upload = multer({storage});


router.get('/', async (req, res) => {
    const artists = await Artist.find({}, {description: false});
    res.send(artists)
});

router.get('/:id', async (req, res) => {
    const artist = await Artist.findOne({_id: req.params.id});
    res.send(artist)
});

router.post('/', upload.single('image'), async (req, res) => {
    const newArtist = {
        name: req.body.name,
        description: req.body.description
    };
    if (req.file) {
        newArtist.image = req.file.filename
    }

    const artist = new Artist(newArtist);

    try {
        await artist.save();
        res.send(artist._id)
    } catch (e) {
        res.status(404).send({message: 'Not found'})
    }
});

router.delete('/:id', async (req, res) => {
    await Artist.deleteOne({_id: req.params.id});
    res.send('Delete')
});

module.exports = router;