var express = require('express');
var router = express.Router();
var model = require('./users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Saif' });
});
router.get('/blog',async (req,res)=>{
const NewArticle1=  await model.create({
  Title: "Dominance of React JS",
  Discription: "this is the power of js in world",
  Author: "Saif Ali" 
})
res.send(NewArticle1)
console.log("check");
})
router.get("/check", async(rq,res)=>{
  const Checking = await model.find()
  res.send(Checking)
})
router.get("/delete",async(req,res)=>{
  const Delete = await model.findOneAndDelete({
    Author:"Saif Ali"
  })
  res.send(Delete)
})


module.exports = router;
