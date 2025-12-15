import express from "express";
import passport from "passport";
import { subjectController } from "../subject/index.js";
import { topicController } from "../topic/index.js";
import { quizController } from "../quiz/index.js";
import { userController } from "../user/index.js";
import { aiController } from "../ai/index.js";
import { authMiddleware } from "../middleware/auth.js";
import { quizResultController } from "../quiz-result/index.js";
import { uXpController } from "../user-xp/index.js";
import { tFinishedController } from "../topic-finished/index.js";

export const createRouter = (upload) => {
  const router = express.Router();

  // =========================
  // USER ROUTES
  // =========================
  router.post('/auth/login', userController.login);
  router.post('/auth/register', userController.register);
  router.get('/auth/user', authMiddleware, userController.me);

  // Update profile
  router.put('/user/profile', authMiddleware, userController.updateProfile);

  // Update avatar
  router.put('/user/avatar', authMiddleware, upload.single('avatar'), userController.updateAvatar);

  // Sign by Google
  router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  router.get(
    '/oauth2/redirect/google',
    passport.authenticate('google', {
      failureRedirect: '/login-failure',
      session: true
    }),
    userController.loginByGoogle
  );

  // =========================
  // SUBJECT ROUTES
  // =========================
  router
    .route("/subjects")
    .post(authMiddleware, upload.single("thumbnail"), subjectController.create)
    .get(subjectController.getAll);

  router
    .route("/subjects/:slug")
    .get(subjectController.getBySlug)
    .put(authMiddleware, upload.single("thumbnail"), subjectController.update)
    .delete(authMiddleware, subjectController.delete);

  // =========================
  // TOPIC ROUTES
  // =========================
  router
    .route("/topics")
    .get(authMiddleware, topicController.getAll);

  router
    .route("/subjects/:subSlug/topics")
    .post(
      authMiddleware,
      upload.single("icon"),
      topicController.create
    )
    .get(authMiddleware, topicController.getBySubjectSlug);

  router
    .route("/subjects/:subSlug/topics/:topSlug")
    .get(authMiddleware, topicController.getByTopicSlug)
    .put(
      authMiddleware, 
      upload.single("icon"),
      topicController.update)
    .delete(authMiddleware, topicController.delete);
  
  // =========================
  // TOPIC FINISHED ROUTES
  // =========================
  router
    .route("/topic-finished")
    .get(authMiddleware, tFinishedController.getByUser);

  // =========================
  // QUIZ ROUTES
  // =========================
  router
    .route("/quizzes")
    .get(authMiddleware, quizController.getAll);
  
  router
    .get("/quiz-results", authMiddleware, quizResultController.getResult)

  router
    .post("/subjects/:subSlug/topics/:topSlug/quizzes/submit", authMiddleware, quizResultController.submit);
    
  router
    .route("/subjects/:subSlug/topics/:topSlug/quizzes")
    .post(authMiddleware, quizController.create)
    .get(authMiddleware, quizController.getByTopic);

  router
    .route("/subjects/:subSlug/topics/:topSlug/quizzes/:uuid")
    .get(authMiddleware, quizController.getByUuid)
    .put(authMiddleware, quizController.update)
    .delete(authMiddleware, quizController.delete);

  // ====
  // AI
  // ====
  router.post('/subjects/:subSlug/topics/:topSlug/ai', authMiddleware, aiController.askAI);
  // router.get('/subjects/:subSlug/fact', authMiddleware, aiController.factAI)

  // ================
  // Leaderboard & XP
  // ================
  router.get('/leaderboard', authMiddleware, uXpController.getLeaderboard);

  return router;
};
