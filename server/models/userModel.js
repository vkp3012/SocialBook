import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        require : true,
        unique : true,
        min : 6,
        max : 10
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    phoneNumber : {
        type : String,
        require : true,
        min : 10,
        max : 15
    },
    password : {
        type : String,
        require : true,
        min : 8,
        max : 15
    }
})

const userModel = mongoose.model("user",userSchema)

export default userModel;