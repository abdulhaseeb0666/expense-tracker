import dotenv from "dotenv";
dotenv.config();

import dns from 'node:dns';

// Configure Node.js to use Google Public DNS globally
dns.setServers(['8.8.8.8', '8.8.4.4']);

import express from "express";
import cors from "cors";
import path from "path";
import connectDB from "./config/db.js";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import passport from "./config/passport.js";
import session from "express-session";

const app = express();

connectDB();


app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(path.resolve() , "public")));
app.use(express.urlencoded({extended : true}));

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200
}));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());
import userRoutes from "./routes/userRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import transactionroutes from "./routes/transactionRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import budgetRoutes from "./routes/budgetRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

// Routes
app.use("/api/users" , userRoutes);
app.use("/api/wallets" , walletRoutes);
app.use("/api/auth" , authRoutes);
app.use("/api/transactions" , transactionroutes);
app.use("/api/analytics" , analyticsRoutes);
app.use("/api/budgets" , budgetRoutes);
app.use(errorMiddleware);

app.listen(process.env.PORT , () => {
    console.log(`Server started on port ${process.env.PORT}`);
})