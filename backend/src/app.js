import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(express.static("./public"));

app.use(express.urlencoded({
    limit: "16kb",
    extended: true
}));

app.use(express.json({
    limit: "16kb",
    extended: true
}));

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(cookieParser());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    message: "Too many requests from this IP address, try again later",
    header: true
})

app.use(limiter);

export {app};
