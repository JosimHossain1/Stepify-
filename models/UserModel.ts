import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: {type: String,},
  email: { type: String },
});


const UserModel = mongoose.models.user || mongoose.model("user", UserSchema)

export default UserModel
