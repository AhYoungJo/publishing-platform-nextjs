import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String},
  password: {type: String, required: true},
  authProviderId: {
    type: String,
  },
  role: {
    required: true,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

export const User = mongoose.models?.User || mongoose.model('User', userSchema);
