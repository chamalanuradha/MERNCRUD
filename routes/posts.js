const express =require('express');
const posts = require('../models/posts');
const Posts =require('../models/posts');

const router = express.Router();
//Create
router.post('/post/save',(req,res)=>{
    let newPost =new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"post Saved Successfully"
        });
    });
});

//Read

router.get('/posts',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });   
        }
        return res.status(200).json({
            sucess:true,
            existingPosts:posts
        });
    });
});

//update 
router.put('/post/update/:id',(req,res)=>{
     Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({sucess:"Update successfully"});
        }
     );
});
//Delete
router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletepost)=>{
        if(err) return res.status(400).json({
            massege:"Delete unsuccessfull",err
        });
        return res.json({
            massege:"Delete Successful",deletepost
        });
    });
});
module.exports = router;