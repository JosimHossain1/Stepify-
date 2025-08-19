import mongoose, { Schema } from 'mongoose';

const branchSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    branchHead: {
      type: String,
    },
  },
  { timestamps: true },
);


const BranchModel = mongoose.models.Branch || mongoose.model("branch", branchSchema)

export default BranchModel