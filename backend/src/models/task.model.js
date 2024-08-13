import mongoose from 'mongoose';

const Option = new mongoose.Schema({
    image_url: String,
    option_id: Number,
    task_id: {
        type: mongoose.Schema.Types.ObjectId(),
        ref: "Task"
    }
})

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    options: Array<Option>
}, { timestamps: true });

const TaskModel = mongoose.models.tasks || mongoose.model('Task', TaskSchema);

export default TaskModel;