const express = require('express')
const router = express.Router()
const {Staffs} = require ('../models/staffs')
const jwt = require('jsonwebtoken')
// const jwtDecode = require("jwt-decode");

async function auth(req,res,next){
    try {
        const tk = req.header('x-auth-token')
        const decode = jwt.verify(tk, process.env.JWT_SECRET) 
        const staff = await Staffs.findOne({_id: decode._id})   
        req.staff = staff
        next()
    } catch (error) {
        return res.status(401).send(error.message)
    }
}

module.exports = auth