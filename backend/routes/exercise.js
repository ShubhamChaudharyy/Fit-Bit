
const router=require('express').Router();
let Exercise=require('../models/exercisemodel');

router.get('/',(req,res,next)=>{
    Exercise.find().then(users=>{
        res.json(users)
    }).catch(err=>{
        res.status(400).json('Error:' + err);
    })
})
router.post('/add',(req,res,next)=>{
    const username=req.body.username;
    const exercisename=req.body.exercisename;
    const duration=req.body.duration;
    const newUser=new Exercise({username,exercisename,duration});
    newUser.save().then(()=>{
        res.json('User Added')
    }).catch(err=>{
        res.status(400).json('Error:'+err);
    })
})
module.exports=router;