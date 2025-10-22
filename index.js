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
import { QuizRepository } from "./src/quiz/quiz.repository.js";
import { QuizService } from "./src/quiz/quiz.service.js";
import { QuizController } from "./src/quiz/quiz.controller.js";
import session from "express-session";
import passport from "passport";
import "./src/config/passport-google.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(session({
  secret: 'SECRET_BANGET',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.use(passport.initialize());
app.use(passport.session());

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

const subjectRepo = new SubjectRepository();
const subjectService = new SubjectService(subjectRepo);
const subjectController = new SubjectController(subjectService);

const topicRepo = new TopicRepository();
const topicService = new TopicService(topicRepo, subjectService);
const topicController = new TopicController(topicService);

const quizRepo = new QuizRepository();
const quizService = new QuizService(quizRepo, topicService);
const quizController = new QuizController(quizService);

app.post('/auth/login', userController.login); // by Email + Passowrd
app.post('/auth/login-google', passport.authenticate("google"), userController.loginByGoogle); // by Google
app.post('/auth/register', userController.register); // by Email + Password
app.get('/auth/user', authMiddleware, userController.me); // get Auth User

app.get('/google', 
  passport.authenticate('google', { 
    scope: ['profile', 'email']
  })
);

app.get('/oauth2/redirect/google', 
  passport.authenticate('google', { 
    failureRedirect: '/login-failure',
    session: true
  }),
  userController.loginByGoogle
);

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

app.post('/subjects/:subSlug/topics/:topSlug/quizzes', quizController.create);
app.get('/subjects/:subSlug/topics/:topSlug/quizzes', quizController.getByTopic);
app.get('/subjects/:subSlug/topics/:topSlug/quizzes/:uuid', quizController.getByUuid);
app.put('/subjects/:subSlug/topics/:topSlug/quizzes/:uuid', quizController.update);
app.delete('/subjects/:subSlug/topics/:topSlug/quizzes/:uuid', quizController.delete);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Application running on localhost:${PORT}`);
})