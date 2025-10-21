import express from "express";
import dotenv from "dotenv";
import { SubjectController } from "./src/subject/subject.controller.js";
import { SubjectService } from "./src/subject/subject.service.js";
import { SubjectRepository } from "./src/subject/subject.repository.js";
import { UserRepository } from "./src/user/user.repository.js";
import { UserService } from "./src/user/user.service.js";
import { UserController } from "./src/user/user.controller.js";
import { authMiddleware } from "./src/middleware/auth.js";

dotenv.config();

const app = express();

app.use(express.json())

const subjectRepo = new SubjectRepository();
const subjectService = new SubjectService(subjectRepo);
const subjectController = new SubjectController(subjectService);

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

app.post('/subjects', subjectController.create);
app.get('/subjects', subjectController.getAll);
app.get('/subjects/:slug', subjectController.getBySlug);
app.put('/subjects/:id', subjectController.update);
app.delete('/subjects/:id', subjectController.delete);

app.post('/auth/login', userController.login);
app.post('/auth/register', userController.register);
app.get('/auth/user', authMiddleware, userController.me);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Application running on localhost:${PORT}`);
})