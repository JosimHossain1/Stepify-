import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {  
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

const CategoryModel =
  mongoose.models.category || mongoose.model('category', CategorySchema);

export default CategoryModel;
