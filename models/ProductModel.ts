import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0, // Default value for discount
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

const ProductModel =
  mongoose.models.product || mongoose.model('product', ProductSchema);

export default ProductModel;
