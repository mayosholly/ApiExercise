const express = require('express')
const router = express.Router()

const postController = require('../controllers/postController')


router.get('/api/posts', postController.indexPost)

router.post('/api/posts', postController.storePost)

router.get('/api/posts/:id', postController.showPost)

router.put('/api/posts/:id', postController.updatePost)

router.delete('/api/posts/:id', postController.deletePost)




module.exports = router