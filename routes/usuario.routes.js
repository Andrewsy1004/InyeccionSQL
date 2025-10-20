import { Router } from 'express';

import { vulnerableLogin } from '../controllers/usuario.controller.js';


const router = Router();

router.post('/login', vulnerableLogin);

export default router;