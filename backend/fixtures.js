const mongoose = require('mongoose');

const Artist = require('./modules/Artist');
const Album = require('./modules/Album');
const Track = require('./modules/Track');

const run = async () => {
    await mongoose.connect('mongodb://localhost/playlist', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    const artists = await Artist.create(
        {name: 'Баста', image: 'basta.jpeg'},
        {name: 'Guf', image: 'guf.jpeg'},
        {name: 'Noggano', image: 'noggano.jpeg'},
    );

    const albums = await Album.create(
        {title: 'Мама', artist: artists[0]._id, yearOfIssue: 2004, coverImage: 'bastaAlbum.jpeg'},
        {title: 'Мастер и маргарита', artist: artists[0]._id, yearOfIssue: 2010, coverImage: 'bastaAlbum2.jpeg'},
        {title: 'Guf умер', artist: artists[1]._id, yearOfIssue: 2014, coverImage: 'gufAlbum.jpeg'},
        {title: 'Я к тебе', artist: artists[1]._id, yearOfIssue: 2008, coverImage: 'gufAlbum2.jpeg'},
        {title: 'Живи красиво', artist: artists[2]._id, yearOfIssue: 2016, coverImage: 'nogganoAlbum.jpeg'}
    );

    const tracks = await Track.create(
        {title: 'Мама', album: albums[0]._id, duration: '2:39', number: 3},
        {title: 'Моя игра', album: albums[0]._id, duration: '5:10', number: 2},
        {title: 'Брат', album: albums[0]._id, duration: '3:07', number: 1},
        {title: 'Гуф умер', album: albums[2]._id, duration: '4:08', number: 2},
        {title: 'Ice baby', album: albums[2]._id, duration: '4:37', number: 1},
        {title: 'Обнимала плечи', album: albums[3]._id, duration: '4:12', number: 1},
        {title: '1001 ночь', album: albums[4]._id, duration: '3:21', number: 1},
    );
    mongoose.connection.close()
};

run().catch(error => {
    console.error('Something went wrong');
});