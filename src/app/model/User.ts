import mongoose, { Document, Schema } from "mongoose";

export interface Message extends Document {
    Context: string;
    CreatedAt: Date;
}



const MessageSchema: Schema<Message> = new Schema({
    Context: String,
    CreatedAt: Date.now
})

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifycode: string;
    verifyCodeExpireAt: Date;
    isverifed:boolean,
    isAcceptingMessage: boolean
    messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "user name is required"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "email is Required"],
        unique: true,
        match: [/.+\@.+\..+/, "please enter a valid email address"]

    },
    password: {
        type: String,
        required: [true, "password is Required"],
    },
    verifycode: {
        type: String,
        required: [true, "verifycode is Required"],
    },
    verifyCodeExpireAt: {
        type: Date,
        required: [true, "verifyCode Expire is Required"],
    },
    isverifed:{
        type: Boolean,
        default: false
    },

    isAcceptingMessage:{
        type: Boolean,
        default: true
    },
    messages:[MessageSchema]
    
})

const userModel=(mongoose.models.User ||mongoose.model<User>("User",UserSchema))


export default userModel;