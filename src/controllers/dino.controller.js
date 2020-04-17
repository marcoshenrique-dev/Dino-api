
const Validator = require('../services/validator');
const mongoose = require('mongoose');

var dino = mongoose.model('dino');

exports.post = async(req , res) =>  {

   const validator = new Validator();
  
  validator.isRequired(req.body.name , 'not fill param name');
  validator.isRequired(req.body.tags , 'not fill param tag');
  validator.isRequired(req.body.species , 'not fill param species');
  validator.isRequired(req.body.description , 'not fill param description');
  

  if(!validator.isValid()){

    res.send(validator.errors()).end();
    return;

  }

  var tags = req.body.tags;
  var result = tags.split(",");
  
  

  var Dino = new dino({

    "name" : req.body.name,
    "tags" : result,
    "species" : req.body.species,
    "description" : req.body.description,
    "url" : req.body.url
  });
  await Dino.save();

  try{

    res.status(201).send({
      "save" : "sucess!",
      "data" : req.body
    });
  }

  catch(error){

    res.status(201).send({
      "save" : "error!",
      "data" : error,
    });
  }


 

},

exports.get = async(req , res) =>  {

  const data  = req.body;
  var result = await dino.find({} , 'name tags species description url');


  try  {
    
    res.status(200).json(result);

}
catch(error){

  res.status(200).send({
    
    "data" : error,
  });
  }

}

exports.getFilter = async(req , res) =>  {

    let type = req.headers.type;
    let search = req.headers.value;
  
        if(type === "tags")
       var result = await dino.find({tags : search} , 'name tags species description url');

       if(type === "species")
       var result = await dino.find({species : search} , 'name tags species description url');

       if(type === "name")
       var result = await dino.find({name : search} , 'name tags species description url');
  

  try  {
    
    res.status(200).send(result);

    }
    catch(error){

    res.status(200).send({
      "save" : "sucess!",
      "data" : error,
    });
    }

      

    


}

exports.getById = async(req , res) =>  {

  const id = req.params.id;
  var result = await dino.findById(id , 'name tags species description url');


  try  {
    
    res.status(200).send(result);

  }
catch(error){

  res.status(200).send({
    
    "data" : error,
  });
  }

}



