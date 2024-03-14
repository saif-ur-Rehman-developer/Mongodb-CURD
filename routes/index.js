var express = require('express');
var router = express.Router();
var model = require('./users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Saif' });
});

//How to create data

router.get('/blog',async (req,res)=>{
const NewArticle1=  await model.create({
  Title: "Dominance of React JS",
  Discription: "this is the power of js in world",
  Author: "Saif" 
})
res.send(NewArticle1)
console.log("check");
})

//How to read data


router.get("/check", async(rq,res)=>{
  const Checking = await model.find()
  res.send(Checking)
})

//How to delete data

router.get("/delete",async(req,res)=>{
  const Delete = await model.findOneAndDelete({
    Author:"Saif Ali"
  })
  res.send(Delete)
})

//How to update data

router.get("/update",async(req,res)=>{
const update = await model.updateOne({
  "_id": "65f17bccf2c23c59d45d5522"
  
},{
$set:{
Author:`Muhammad Imran`
}}
)
  res.send(update)
})

// How wo can search in Mongodb with case sensitive

router.get('/search',async (req,res)=>{
  
  
  //if youu can search in db with that you cannot search properly 
  //becuse of words sensitivty 
  // let caseSensitive= new RegExp('Name','Flags')
  //your author start form ^ and end from $
 
 
  let caseSensitive= new RegExp('^Saif$','i')
  const searching = await model.find({
    Author:caseSensitive
  })
  res.send(searching)

})

module.exports = router;
