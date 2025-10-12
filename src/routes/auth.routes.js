import { signIn, signOut, signup } from '#src/controllers/auth.controller.js';
import express from 'express';

const router = express.Router();

router.post('/sign-up', signup)

router.post('/sign-in', signIn)

router.post('/sign-out', signOut)

router.post('/sign-verify', (req, res) => {
    res.send('POST /api/auth/verify response')
})

export default router;