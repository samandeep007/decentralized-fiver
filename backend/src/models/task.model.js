import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const UserModel = mongoose.models.tasks || mongoose.model('Task', TaskSchema);

export default UserModel;