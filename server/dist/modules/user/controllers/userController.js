"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const userModel_1 = require("../models/userModel");
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        // Check if user exists
        const existingUser = yield userModel_1.User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email.' });
        }
        // Hash password
        // const hashedPassword = await bcrypt.hash(password, 10);
        // Create user
        const user = new userModel_1.User({ name, email, password: hashedPassword });
        yield user.save();
        // Respond without password
        const _a = user.toObject(), { password: _ } = _a, userData = __rest(_a, ["password"]);
        res.status(201).json(userData);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Find user
        const user = yield userModel_1.User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }
        // Compare password
        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) {
        //   return res.status(401).json({ error: 'Invalid email or password.' });
        // }
        // Generate JWT
        // const token = jwt.sign(
        //   { userId: user._id, email: user.email },
        //   process.env.JWT_SECRET as string,
        //   { expiresIn: '1h' }
        // );
        let token = "HEHEHE";
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.loginUser = loginUser;
