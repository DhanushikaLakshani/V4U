const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModel')

router.get('/',async(req,res)=>{
    try {
        const clients = await signUpTemplateCopy.find()
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.get('/:email',async(req,res)=>{
    try {
        const {email} = req.params;
        const clients = await signUpTemplateCopy.findOne({email})
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.post('/signup', async(req, res) =>{
    try {
        const {firstName,lastName,email,password,date,user} =  req.body;
        const response = await signUpTemplateCopy.create({firstName,lastName,email,password,date,user})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.put('/', async(req, res) =>{
    try {
        const {firstName,lastName,email,password,date,user} =  req.body;
        const response = await signUpTemplateCopy.updateOne({email},{firstName,lastName,email,password,date,user})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.delete('/:email', async(req, res) =>{
    try {
        const {email} = req.params;
        const _ = await signUpTemplateCopy.findOneAndDelete({email})
        res.status(200).json(_)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})






module.exports = router