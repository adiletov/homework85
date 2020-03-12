const express = require('express');
const multer = require('multer');
const config =require('../config');
const Album = require('../modules/Album');
const router = express.Router();

const storage = config.storage;
const upload = multer({storage});

router.get('/', async (req,res)=>{
    if (!req.query.artist){
        const albums = await Album.find().populate('artist');
        return  res.send(albums)
    }else{
        const artist = await Album.find({artist : req.query.artist}).populate('artist').sort('yearOfIssue');
        return res.send(artist)
    }
});


router.get('/:id', async (req,res)=>{
    const album = await Album.findOne({_id : req.params.id}).populate('artist');
    res.send(album)
});

router.post('/', upload.single('image'), async (req,res)=>{
   const newAlbum = {
       title: req.body.title,
       artist: req.body.artist,
       yearOfIssue: req.body.yearOfIssue
   };
   if (req.file){
       newAlbum.coverImage = req.file.filename
   }

   const album = new Album(newAlbum);
    try{
       await album.save();
       res.send(album._id)
    }catch (e) {
        res.status(404).send({message: 'Not found'})
    }
});

router.delete('/:id', async (req,res)=>{
    await Album.deleteOne({_id: req.params.id});
    res.send('Delete')
});


module.exports= router;