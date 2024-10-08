import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController';
import authMiddleware from '../../../middlewares/authMiddleware';

const router = Router();

router.get('/', async (req, res) => {
      res.status(200).json({ message: "hello" });
});

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
// router.get('/', authMiddleware, async (req, res) => {
//   try {
//     // Example protected route to get all users
//     // const users = await User.find().select('-password');
//     const users = {}
//     res.status(200).json(users);
//   } catch (error: any) {
//     res.status(500).json({ error: error.message });
//   }
// });

export default router;