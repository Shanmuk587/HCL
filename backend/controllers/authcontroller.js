const {Crc} = require('../models/Participants');

const crcloginHandler = async(req,res) => {
    try{
        const crcuser = await Crc.findOne({
            username: req.body.username
        });
        if(crcuser && crcuser.password==req.body.password)
        {
            res.status(200).send({Message: "Login Successful"});
        }
        else
        {
            res.status(400).send({Message:"Invalid Credentials!!"});
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(400).send({Message:"User not found!!"});
    }
}

const piloginHandler = async(req,res) => {
    try{
        const piuser = await Pi.findOne({
            username: req.body.username
        });
        if(piuser && piuser.password==req.body.password)
        {
            res.status(200).send({Message: "Login Successful"});
        }
        else
        {
            res.status(400).send({Message:"Invalid Credentials!!"});
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(400).send({Message:"User not found!!"});
    }
}

module.exports={crcloginHandler,piloginHandler};