import mongoose from "mongoose"
import {Schema, model, models} from "mongoose"
import { unique } from "next/dist/build/utils";

const UserSchema = new Schema ({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String},
    phoneNumber: {type: String},
    role: {type: String, required: true, enum: ['USER', 'ADMIN']}
},
{
    timestamps: true
}
)

const User = models.User || model("User", UserSchema);

export default User