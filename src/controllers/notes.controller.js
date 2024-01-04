import Notes from '../models/Notes.js';

export const getNotes = (req, res) => {
	res.status(200).json('hello');
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
