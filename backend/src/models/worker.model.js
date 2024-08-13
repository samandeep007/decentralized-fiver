import mongoose from 'mongoose';

const WorkerSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {timestamps: true});

const WorkerModel = mongoose.models.workers || mongoose.model('Worker', WorkerSchema);

export default WorkerModel;