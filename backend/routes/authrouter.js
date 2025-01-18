const express=require("express");

const {crcloginHandler,piloginHandler} = require('../controllers/authcontroller');
const authRouter=express.Router();


authRouter.route("/crclogin").post(crcloginHandler);
authRouter.route("/pilogin").post(piloginHandler);

module.exports={authRouter};