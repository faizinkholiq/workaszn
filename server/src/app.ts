import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './modules/user/routes/userRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Database Connection
// mongoose.connect(process.env.MONGODB_URI as string, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', async (req, res) => {
  res.status(200).json({ message: "hello" });
});
app.use('/api/users', userRoutes);

// Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

export default app;