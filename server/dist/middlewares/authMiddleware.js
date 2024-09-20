"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import jwt from 'jsonwebtoken';
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authMiddleware = (req, res, next) => {
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
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid token.' });
    }
};
exports.default = authMiddleware;
