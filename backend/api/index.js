require('dotenv').config();
const express = require("express");
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Routes
const authRoutes = require('../routes/authRoutes');
const notesRoutes = require('../routes/notesRoutes');
const { connectToDb } = require('../db');

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many requests, please try again later.",
    },
});

app.use(limiter);

const PORT = process.env.PORT || 3000;
console.log('PORT from env:', process.env.PORT);

// Default route
app.get("/", (req, res) => {
    try {
        res.status(200).send({ success: true, message: `hello world` });
    } catch (error) {
        res.status(500).send({ success: false, message: `internal server error` });
    }
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);

// // Fallback 404 route
// app.use("*", (req, res) => {
//     res.status(404).json({
//         success: false,
//         message: "Route not found",
//     });
// });

// DB Connection
connectToDb();

app.listen(PORT, () => {
    console.log(`The server is working on port ${PORT}`);
});

module.exports = app;
