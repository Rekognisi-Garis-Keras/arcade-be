import express from "express";
import { subjectController } from "../subject/index.js";
import { topicController } from "../topic/index.js";
import { quizController } from "../quiz/index.js";
import { userController } from "../user/index.js";
import { aiController } from "../ai/index.js";
import passport from "passport";
import { authMiddleware } from "../middleware/auth.js";
import { quizResultController } from "../quiz-result/index.js";

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
      upload.fields([
        { name: "model", maxCount: 1 },
        { name: "marker", maxCount: 1 }
      ]),
      topicController.create
    )
    .get(authMiddleware, topicController.getBySubjectSlug);

  router
    .route("/subjects/:subSlug/topics/:topSlug")
    .get(authMiddleware, topicController.getByTopicSlug)
    .put(
      authMiddleware, 
      upload.fields([
        { name: "model", maxCount: 1 },
        { name: "marker", maxCount: 1 }
      ]),
      topicController.update)
    .delete(authMiddleware, topicController.delete);

  // =========================
  // QUIZ ROUTES
  // =========================
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

    // =========================
    // USER ROUTES
    // =========================
    router.post('/subjects/:subSlug/topics/:topSlug/ai', authMiddleware, aiController.askAI);

  return router;

  // =========================
  // QUIZ RESULT ROUTES
  // =========================
};
