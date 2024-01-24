import express, { Router, Request, Response } from 'express';
import TokenService from '../services/tokenService';

const router: Router = express.Router();
const tokenService: TokenService = new TokenService();

router.post('/create', async (req: Request, res: Response) => {

    console.log('body', req.body);
  const data = req.body;
    try {
      const newToken = await tokenService.generateToken(data);
      res.status(200).json({response:newToken})
      //res.json(newToken);
    } catch (error) {
      console.error('Error creating token:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

export default router;