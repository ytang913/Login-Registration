const express = require('express')
const router = express.Router()
const loginTemplateCopy = require('../models/LoginModels')

router.post('/signup', (request, response) =>{
    const signupUser = new loginTemplateCopy({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    signupUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>){
        response.json(error)
    }
})


module.exports = router