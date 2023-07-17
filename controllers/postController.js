const Post = require('../models/Post')

const indexPost = async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json(posts)

    } catch (error) {
         console.log(error)
    }

}


const storePost = async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(201).json({
            message: "Successfully created",
            "data" : post            
        })
    } catch (error) {
        console.log(error)
    }
}

const showPost = async(req, res) => {
    const id = req.params.id
    try {
        const post = await Post.findById(id)
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
    }
}

const updatePost = async(req, res) => {
    const postBody = req.body
    const id  = req.params.id
    try {
        const post = await Post.findByIdAndUpdate(id, postBody)
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
    }
}

const deletePost = async(req, res) => {
    const id = req.params.id
    try {
        const post = await Post.findByIdAndDelete(id)
        res.status(200).json({
            message: "Successfully Deleted"
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { indexPost, storePost, showPost, updatePost, deletePost }