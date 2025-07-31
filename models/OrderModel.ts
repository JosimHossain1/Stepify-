import mongoose, { Schema } from 'mongoose';

const OrderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Products',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new Schema(
  {
    // User
    user: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },

    // Order Items
    orderItems: [OrderItemSchema],

    // Shipping Address
    shippingAddress: {
      fullName: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },

    // Payment Method
    paymentMethod: {
      type: String,
      enum: ['Cash On Delivery', 'Card', 'Stripe', 'Paypal'],
      default: 'Cash On Delivery',
    },

    // Payment Status
    paymentStatus: {
      type: String,
      enum: ['Unpaid', 'Paid'],
      default: 'Unpaid',
    },

    // Order Status
    orderStatus: {
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },

    // Total Ammount
    totalAmmount: { type: Number, required: true },

    // Delivery Status
    isDelivered: {
      type: Boolean,
      default: false,
    },

    // Paid Status

    isPaid: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const OrderModel =
  mongoose.models.order || mongoose.model('order', OrderSchema);

export default OrderModel;
