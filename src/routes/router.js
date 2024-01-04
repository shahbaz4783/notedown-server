import express from 'express';
import notesRoutes from './notes.routes.js'

export const routes = express();

routes.use(notesRoutes);
