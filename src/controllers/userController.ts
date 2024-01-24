
import express, { Router, Request, Response } from 'express';
import UserService from '../services/userService';

const router: Router = express.Router();
const userService: UserService = new UserService();

router.post('/create', async (req: Request, res: Response) => {
    const { username, email } = req.body;
    try {
      const newUser = await userService.createUser(username, email);
      res.json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

export default router;
