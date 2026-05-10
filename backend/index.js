import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import rateLimit from "express-rate-limit";

const app = express();
dotenv.config();

connectDB();

app.use(xss());
app.use(mongoSanitize());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));

import userRoutes from "./routes/userRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import transactionroutes from "./routes/transactionRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

// Routes
app.use("/api/users" , userRoutes);
app.use("/api/wallets" , walletRoutes);
app.use("/api/auth" , authRoutes);
app.use("/api/transactions" , transactionroutes);

app.use(errorMiddleware);

app.listen(process.env.PORT , () => {
    console.log(`Server started on port ${process.env.PORT}`);
})