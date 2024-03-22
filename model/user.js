import mongoose from "mongoose";

const user = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
}, { timestamps: true });


export const UserModel = mongoose.model("UserMulter", user);