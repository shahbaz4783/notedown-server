import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { routes } from './routes/router.js';

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', routes);

const port = process.env.PORT || 8000;

connectDB(
	app.listen(port, () => {
		console.log(`Listning on ${port}`);
	})
);
