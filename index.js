import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "./src/config/passport-google.js";
import { createRouter } from "./src/router/router.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", createRouter());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send({ message: "ARcade API" });
});

app.listen(PORT, () => {
  console.log(`Application running on localhost:${PORT}`);
})