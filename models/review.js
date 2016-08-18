const mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    title : String,
    content : String,
    rating : Number,
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    place : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'place'
    }
}, {
    timeStamps : true
});

module.exports = mongoose.model('review', reviewSchema);
