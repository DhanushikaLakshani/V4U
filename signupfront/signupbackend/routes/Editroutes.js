const express = require('express')
const router = express.Router()
const editprofileCopy = require('../models/Editprofile')

router.get('/',async(req,res)=>{
    try {
        const clients = await editprofileCopy.find()
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.get('/:email',async(req,res)=>{
    try {
        const {email} = req.params;
        const clients = await editprofileCopy.findOne({email})
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
router.post('/edit', async(req, res) =>{
    try {
    
        const {profile_image,fullname,nic,email,location,bio,personalwebsite,portfolioURL,date} =  req.body;
        const response = await editprofileCopy.create({profile_image,fullname,nic,email,location,bio,personalwebsite,portfolioURL,date})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})


router.put('/', async(req, res) =>{
    try {
        const {profile_image,fullname,nic,email,location,bio,personalwebsite,portfolioURL,date} =  req.body;
        const response = await editprofileCopy.updateOne({email},{profile_image,fullname,nic,email,location,bio,personalwebsite,portfolioURL,date})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.delete('/:email', async(req, res) =>{
    try {
        const {email} = req.params;
        const _ = await editprofileCopy.findOneAndDelete({email})
        res.status(200).json(_)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = router