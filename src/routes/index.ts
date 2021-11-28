import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/test', (request: Request, response: Response) => {
  response.status(200).json({ message: 'ok' });
});

export default router;
