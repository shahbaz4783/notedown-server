import express from 'express';
import 'dotenv/config'

const app = express();

app.get('/', (req, res) => {
	res.status(200).json('hello');
});

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Listning on ${port}`);
});
