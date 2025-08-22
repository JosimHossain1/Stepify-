import mongoose, { Schema } from "mongoose";

const RoleSchema = new Schema(
  {
    roleName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const RoleModel =
  mongoose.models.role || mongoose.model("role", RoleSchema);

export default RoleModel;
