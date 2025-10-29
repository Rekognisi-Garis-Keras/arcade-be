import express from "express";
import dotenv from "dotenv";
import { SubjectController } from "./src/subject/subject.controller.js";
import { SubjectService } from "./src/subject/subject.service.js";
import { SubjectRepository } from "./src/subject/subject.repository.js";
import { UserRepository } from "./src/user/user.repository.js";
import { UserService } from "./src/user/user.service.js";
import { UserController } from "./src/user/user.controller.js";
import { authMiddleware } from "./src/middleware/auth.js";
import { TopicRepository } from "./src/topic/topic.repository.js";
import { TopicService } from "./src/topic/topic.service.js";
import { TopicController } from "./src/topic/topic.controller.js";

dotenv.config();

const app = express();

app.use(express.json())

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

const subjectRepo = new SubjectRepository();
const subjectService = new SubjectService(subjectRepo);
const subjectController = new SubjectController(subjectService);

const topicRepo = new TopicRepository();
const topicService = new TopicService(topicRepo, subjectService);
const topicController = new TopicController(topicService);

app.post('/auth/login', userController.login);
app.post('/auth/register', userController.register);
app.get('/auth/user', authMiddleware, userController.me);

app.post('/subjects', subjectController.create);
app.get('/subjects', subjectController.getAll);
app.get('/subjects/:slug', subjectController.getBySlug);
app.put('/subjects/:slug', subjectController.update);
app.delete('/subjects/:slug', subjectController.delete);

app.post('/subjects/:subSlug/topics', topicController.create);
app.get('/subjects/:subSlug/topics', topicController.getBySubjectSlug);
app.get('/subjects/:subSlug/topics/:topSlug', topicController.getByTopicSlug);
app.put('/subjects/:subSlug/topics/:topSlug', topicController.update);
app.delete('/subjects/:subSlug/topics/:topSlug', topicController.delete);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send({ message: "ARcade API" });
});

app.listen(PORT, () => {
  console.log(`Application running on localhost:${PORT}`);
})