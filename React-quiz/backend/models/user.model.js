import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6, select: false },
  },
  { timestamps: true },
);

userSchema.set('toJSON', {
  transform: (_document, returnedUser) => {
    delete returnedUser.password;
    delete returnedUser.__v;
    return returnedUser;
  },
});

export const User = mongoose.model('User', userSchema);
