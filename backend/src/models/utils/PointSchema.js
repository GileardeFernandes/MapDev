const mongoose = require('mongoose');


const PointSchema = mongoose.Schema({
    type:{
        type: String,
        enum: ['Point'],
        require: true
    },
    coordinates: {
        type: [Number],
        createIndexes: true 
    }
});

module.exports = PointSchema;