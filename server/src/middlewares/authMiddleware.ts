import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface JwtPayload {
  userId: string;
  email: string;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: 'No token provided.' });

  const token = authHeader.split(' ')[1];

  if (!token)
    return res.status(401).json({ error: 'Token malformed.' });

  try {
    // const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    // req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token.' });
  }
};

export default authMiddleware;