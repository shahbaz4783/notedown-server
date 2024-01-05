import { Router } from 'express';
import { deleteNotes, getNotes, postNotes } from '../controllers/notes.controller.js';

const router = Router();

router.get('/notes', getNotes);
router.post('/notes', postNotes);
router.delete('/notes/delete', deleteNotes);

export default router;
