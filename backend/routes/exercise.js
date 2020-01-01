
const router=require('express').Router();
let Exercise=require('../models/exercisemodel');

router.get('/',(req,res,next)=>{
    Exercise.find().then(users=>{
        res.json(users)
    }).catch(err=>{
        res.status(400).json('Error:' + err);
    })
})
router.get('/:id',(req,res,next)=>{
    const id=req.params.id;
    Exercise.findById(id).then(users=>{
        console.log(users);
        res.json(users);
    }).catch(err=>{
        res.status(400).json('Error:' + err);
    })
})
router.post('/add',(req,res,next)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=req.body.duration;
    const newUser=new Exercise({username,description,duration});
    newUser.save().then(()=>{
        res.json('User Added')
    }).catch(err=>{
        res.status(400).json('Error:'+err);
    })
})
router.post('/update/:id',(req,res,next)=>{
    const id=req.params.id;
    Exercise.findById(id).then(exercises=>{
        if(exercises)
        {
           
            exercises.username=req.body.username;
            exercises.description=req.body.description;
            exercises.duration=req.body.duration;
           exercises.save();
        }
        res.json(exercises);
   })
  .catch(err=>{
        res.status(400).json('Error:'+err);
    })
})
router.delete('/delete/:id',(req,res,next)=>{
    const id=req.params.id;
    Exercise.findByIdAndDelete(id)
    .then(response=>{
           res.json(response);           
    }).catch(err=>{
        res.status(400).json('Error:'+err);
    })
})
module.exports=router;