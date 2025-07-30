import mongoose, {Schema} from "mongoose";


const ProductSchema = new Schema({
  title : {
    type : String
  },
  price : {
    type : Number
  },
  description : {
    type : String
  }
})

const ProductModel  = mongoose.models.product || mongoose.model("product", ProductSchema)

export default ProductModel;