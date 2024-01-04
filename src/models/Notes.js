import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: false,
		},
		body: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
);

const notes = mongoose.model('Notes', notesSchema);

export default notes;
