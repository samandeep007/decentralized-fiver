import mongoose from 'mongoose';

const OptionSchema = new mongoose.Schema({
    image_url: String,
    option_id: Number,
    task_id: {
        type: mongoose.Schema.Types.ObjectId(),
        ref: "Task"
    }
})

const OptionModel = mongoose.models.options || mongoose.model('Option', OptionSchema);
export default OptionModel;


