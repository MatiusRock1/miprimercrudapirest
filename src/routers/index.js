const express = require('express');
const router = express.Router();
const register = require ('../models/register');
const Register = require ('../models/register');
var RegisterShemavalidator = require('jsonschema').Validator;
var RegisterShema = new RegisterShemavalidator();

const schema = require('../Schema/register.json');




router.post('/register' , async (req,res) => {
     const register = new Register(req.body);
     const validation = (RegisterShema.validate(req.body, schema));
     if(validation.errors.length == 0 ){
      await register.save()
      .then(db => console.log('actualizacion correcta de datos'))
      .catch(err => console.log(err));
      ;
      res.json({response: 0});
     }
     else{
       res.json(validation.errors);
     }  
});


module.exports = router;