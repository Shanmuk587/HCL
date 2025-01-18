const express=require("express");

const {participanthandler} = require('../controllers/authcontroller');
const addRouter=express.Router();


addRouter.route("/addp").post();


module.exports={authRouter};

