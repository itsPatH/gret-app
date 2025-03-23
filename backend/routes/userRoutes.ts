import express from 'express';
import { getUser, updateUser } from '../controllers/userController';

const router = express.Router();

router.get('/:id', getUser);
router.put('/:id', updateUser);

export default router;
