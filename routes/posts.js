const express = require('express');
const route = express.Router();
const Post = require('./../models/Post');

route.get('/',async (req,res,next)=>{
    try {
        const data = await Post.find()
        res.send(data)
    } catch (error) {
        next(error)
    }
})

route.get('/:postId',async (req, res,next) => {
    try {
        const data = await Post.findById(req.params.postId)
        res.send(data)
    } catch (error) {
        next(error)
    }
})

route.post('/', async (req,res, next) => {
    try {
        const data = await Post.create(req.body)
        res.send(data);
    } catch (error) {
        next(error)
    }

})

route.put('/:postId', async (req,res,next)=> {
    try {
        const data = await Post.findByIdAndUpdate(req.params.postId,req.body, {new: true})
        res.send(data);
    } catch (error) {
        next(error)
    }
})

route.delete('/:postId', async (req,res,next) => {
    try {
        const data = await Post.findByIdAndDelete(req.params.postId, req.body)
        res.send(data);
    } catch (error) {
        next(error)
    }
})


module.exports = route;