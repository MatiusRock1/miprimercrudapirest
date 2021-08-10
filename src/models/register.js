const { Router } = require('express');
const moongose = require('mongoose');
const Schema = moongose.Schema;

const RegisterShema = new Schema({
    name : String,
    lastname : String,
    birthdate : String,
    address : String,
    status : {
        type : Boolean,
        default: true
    }

});

module.exports = moongose.model('register' , RegisterShema);