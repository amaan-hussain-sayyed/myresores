import mongoose from 'mongoose';
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    role: { type: String, default: 'user' },
    permissions: {
        permission: { type: mongoose.Schema.Types.ObjectId, ref: 'Permission' },
        isActive: { type: Boolean, default: true },
        stop: { date: Date },
    },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    verificationTokenExpires: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    details: { type: mongoose.Schema.Types.ObjectId, ref: 'UserDetails' },
    Blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }],

}, { timestamps: true }

);

UserSchema.pre('save', async function (next) {
    const user:any= this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    //sending emalil verification token
    next();
});




UserSchema.methods.matchPassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};




export default mongoose.models.User || mongoose.model('User', UserSchema);