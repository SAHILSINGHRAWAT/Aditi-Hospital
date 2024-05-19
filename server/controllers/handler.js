const user =require('../schema/user');
const  doctor=require('../schema/doctor');
const appointment =require('../schema/appointment');
const bcrypt = require('bcrypt');
const nothing= async (req, res ) =>{
    return res.status(200).json({
        success:true , 
        message:"im called",
    })
}
const signup =async (req, res) =>{
    try{
        const {username , email , createpassword , confirmpassword , mobileNo ,role}=req.body;
        if(!username || !email || !createpassword || !confirmpassword || !mobileNo || !role  ){
            return res.status(401).json({
                success:false,
                message:"enter complete details ",
            })
        }
        if(createpassword!=confirmpassword){
            return res.status(401).json({
                success:false,
                message:"Same Password Must be entered",
            })
        }
        const isexisting =await user.findOne({email});
        if(isexisting){
            return res.status(401).json({
                success:false,
                message:"user email already exist , please direct to login page",
            })
        }
        const hashedPassword = await bcrypt.hash(confirmpassword , 12 );
        const doSign = await user.create({
            username,
            password:hashedPassword,
            email:email , 
            mobile:mobileNo,
            role:role,
        })
        return res.status(500) .json({
            success:true,
            message:"USER REGISTERED SUCCESFULLY  , Now Login to proceed further",
        })
    }
    catch(err){
        console.log("error occured while signing up , developr's concern!! " , err);
        return res.status(403) .json({
            success:false,
            message:"error while signing up , try after sometime",
        })
    }
}
const makeAppointment=async (req, res) =>{
    try{
        const {user,doctor, time }=req.body;
        if(!user || !doctor || !time){
            return res.status(401).json({
                success:false,
                message:"enter complete details ",
            })
        }

        const Made_appointment = await appointment.create({user:user ,doctor:doctor , time:time});
        return res.status(200).json({
            success:true , 
            message:"Appointment created successfully",
        })

    }
    catch(err){
        console.log("error occured while making appointment " , err);
        return res.status(500) .json({
            success:false,
            message:"mentioned error is in making appointment in catch block , try after sometime",
        })
    }
}
module.exports = { signup ,  makeAppointment , nothing};