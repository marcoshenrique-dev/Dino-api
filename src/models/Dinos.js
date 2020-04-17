const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  name : {

    type : String,
    required : [true , 'Is necessary!'],
  },

  tags : [{

    type : String,
    required : [true , 'Is necessary!'],
  }],

  species : {

    type : String,
    required : [true , 'Is necessary!'],
  },

  description : {

    type : String,
    required : [true , 'Is necessary!'],
  },

  url : {

    type : String,
    required : [true , 'Is necessary!'],
  },


});

module.exports = mongoose.model('dino' , schema);