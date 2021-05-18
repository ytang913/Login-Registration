const express = require('express')
const router = express.Router()
const loginTemplateCopy = require('../models/LoginModels')

router.post('/signup', (request, response) =>{
    const signupUser = new loginTemplateCopy({
        fullName: request.body.fullName
    })
})


module.exports = router