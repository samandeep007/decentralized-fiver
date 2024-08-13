import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option',
        required: true
    }]
}, { timestamps: true });

const TaskModel = mongoose.models.tasks || mongoose.model('Task', TaskSchema);

export default TaskModel;
