import mongoose from "mongoose";// Define user schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  isManger: {type:Boolean,default:false},
  pastOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});
export default mongoose.model("User",userSchema);


