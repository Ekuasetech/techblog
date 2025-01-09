import express from 'express';
import { deleteUser, getUser, getUsers, signout, test, updateuser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test)
router.put('/update/:userId', verifyToken, updateuser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.get('/getusers', verifyToken, getUsers);
router.post('/signout', signout);
router.get('/:userId', getUser);

export default router