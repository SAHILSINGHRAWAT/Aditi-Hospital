const mongoose = require('mongoose');
const courseschema = new mongoose.Schema({
    coursename:{
        type:String,
    },
    coursedescription:{
        type:String ,
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    whatUWillLearn:{
        type:String ,
    },
    courseContent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"section",
    }],
    ratingAndReviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratingreview",
    }],
    price:{
        type:Number,
    },
    thumbnail:{
        type:String,
    },
    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"tag",
    },
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user",
    }]
});
const course = mongoose.model("course", courseschema );
module.exports = course;