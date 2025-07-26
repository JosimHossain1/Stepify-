import { Schema, models, model} from "mongoose"

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
      minlenght: 6,
    },
    role: {
      type: String,
      enum: [
        'superadmin',
        'manager',
        'salesman',
        'accountant',
        'inventory',
        'delivery',
      ],
      default: 'salesman',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    profileImage: {
      type: String,
      default: '/default-avater.png',
    },
  },
  {
    timestamps: true,
  },
);

const userModel = models.User || model('User', UserSchema);

export default userModel;
