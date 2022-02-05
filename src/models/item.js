const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema({
    title:{
        type: String,  
        required: true      
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

Item.methods.setPicture = function(file){
    this.picture = '/public/'+file
}

module.exports = mongoose.model('items', Item)