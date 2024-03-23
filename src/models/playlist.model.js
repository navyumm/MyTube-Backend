import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema({
    name:{
        type: String,
        required: true 
    },
    description:{
        type: String,
        required: true 
    },
    videos:{
            type: Schema.Types.ObjectId,
            required: "Video" 
    },
    owner:{
            type: Schema.Types.ObjectId,
            required: "User" 
    },
},{
    timestamps: true
})

export const Playlist = mongoose.model("Playlist", playlistSchema)