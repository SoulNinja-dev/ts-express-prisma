import { Router } from 'express';
const router = Router();

import { getUsers, deleteUser } from '../controllers/user.controller';

router.route('/').get(getUsers).delete(deleteUser);

export default router;
