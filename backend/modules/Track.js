const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const newSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        default: 0
    }
});


newSchema.methods.addNumber = function (cb) {
if (this.isNew){
    this.number = this.number + 1;
}
    this.number++;
};




const Track = mongoose.model('Track', newSchema);
module.exports = Track;