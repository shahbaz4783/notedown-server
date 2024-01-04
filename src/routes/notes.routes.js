import { Router } from 'express';
import { getNotes, postNotes } from '../controllers/notes.controller.js';

const router = Router();

router.get('/notes', getNotes);
router.post('/notes', postNotes);

export default router;
