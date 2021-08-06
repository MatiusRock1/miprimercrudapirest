const express = require('express');
const router = express.Router();
const Register = require ('../models/register');
var RegisterShemavalidator = require('jsonschema').Validator;
var RegisterShema = new RegisterShemavalidator();

const schema = require('../Schema/register.json');


router.get('/register' , async (req,res) => {
  try { 
  const register = await Register.find();
  res.json(register);  
  }
  catch (err)
  {
    console.log(err);
    res.json({response: 1});
  }
});


router.post('/register' , async (req,res) => {
      const register = new Register(req.body);
     const validation = (RegisterShema.validate(req.body, schema));
     if(validation.errors.length == 0 ){
      try { 
      await register.save();
      res.json({response: 0});
      }
      catch (err){
        console.log(err);
        res.json({response: 1});
      }
     }
     else{
       res.json(validation.errors);
     }  
});
router.delete ('/register/:id', async (req,res) => {
      const { id } = req.params;
      try{
        await Register.remove({_id : id});
        res.json({response: 0});
      }
      catch (err){
        console.log(err);
        res.json({response: 1});
      }
      
});

router.patch('/register/:id', async (req,res) => {
  const { id } = req.params;
  const validation = (RegisterShema.validate(req.body, schema));
  if(validation.errors.length == 0 ){
  try{
    await Register.updateOne({_id:id}, req.body);
    res.json({response: 0});
  }
  catch(err){
    console.log(err);
    res.json({response: 1});
  }
}
else
{
  res.json(validation.errors);
}  
});


module.exports = router;