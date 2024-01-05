import Notes from '../models/Notes.js';

export const getNotes = async (req, res) => {
	const allNotes = await Notes.find();
	res.status(200).json({ data: allNotes });
};

export const postNotes = async (req, res) => {
	try {
		const { title, body } = req.body;
		const notes = new Notes({
			title: title,
			body: body,
		});
		const result = await notes.save();
		console.log(result);
		res.status(201).json('Your Notes Created Successfully');
	} catch (error) {
		console.log(error);
	}
};

export const deleteNotes = async (req, res) => {
	try {
		const notesId = req.params.id;
		await Notes.findByIdAndDelete(notesId);
		res.status(202).json('Sucessfully Deleted Your Notes');
	} catch (error) {
		console.log(error);
	}
};
