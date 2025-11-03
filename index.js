import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "./src/config/passport-google.js";
import { createRouter } from "./src/router/router.js";
import Multer from "multer";
import cors from "cors";
import { v2 as cloudinary } from 'cloudinary';
import { errorHandler } from "./src/middleware/errorHandler.js";

dotenv.config();

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY || "732694742653797",
  api_secret: process.env.CLOUDINARY_API_SECRET || "Cv4Mc53MmxKktXjb14iStA5qD7g",
});

// APP EXPRESS
const app = express();
app.use(cors());

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", createRouter(upload));

app.get("/", (req, res) => {
  res.status(200).send({ message: "ARcade API" });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Application running on localhost:${PORT}`);
})