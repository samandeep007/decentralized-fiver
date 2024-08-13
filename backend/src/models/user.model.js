import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {timestamps: true});

const UserModel = mongoose.models.users || mongoose.model('User', UserSchema);

export default UserModel;