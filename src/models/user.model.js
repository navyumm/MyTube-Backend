import mongoose, { Schema } from "mongoose";
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true             // ye searching field enable kar deta hai
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avtar: {
        type: String,           // cloudinary url
        required: true,
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "Password is reqired"]
    },
    refreshToken: {
        type: String
    }
},
{
    timestamps: true
})


userSchema.pre("/save", async function (req, res, next){
    if(!this.isModified("password")) return next ();       //? toh ye condition likho

    this.password = bcrypt.hash(this.password, 10)       // ab yaha ek problem hai, jab bhi ye save hoga toh password ko save karega, jaise agr kisi ne avtar bhi change kiya to ye fir se password save karega
    next();                                             // ab hume kya karna hai, jab hum paasword field bhje bss tabhi password change ho
}); 

//? -------------


userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
};

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const user = mongoose.model("User", userSchema)


// ab hume yaha par kuch methods daalne padenge taki hum check akr paaye jo user ne passwword dala hai vo theek toh hai na
// toh mongoose me jaayenge aur custom method bnayenge jaise hmare baaki hai create, find, delete
// iske liye hume ek userSchema lena pdega aur uske andr hota h ek methods


//?----------------------------------------------

//! JWT :
// ab ispr aate hai -> ye hamara ek Beerer token,
// matlab jo isko beer karta hai, usko sahi maan lete hai, means ye ek key ki tarah hai

// ab ye hmare env file me dikhegi