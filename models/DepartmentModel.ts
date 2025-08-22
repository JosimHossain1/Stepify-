import mongoose, { Schema } from "mongoose";

const DepartmentSchema = new Schema(
  {
    departmentName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const DepartmentModel =
  mongoose.models.department || mongoose.model("department", DepartmentSchema);

export default DepartmentModel;
