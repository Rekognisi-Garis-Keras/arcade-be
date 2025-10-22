import express from "express";
import { subjectController } from "../subject/index.js";
import { topicController } from "../topic/index.js";
import { quizController } from "../quiz/index.js";
import { userController } from "../user/index.js";
import passport from "passport";
import { authMiddleware } from "../middleware/auth.js";

export const createRouter = () => {
  const router = express.Router();

  // =========================
  // USER ROUTES
  // =========================
  router.post('/auth/login', userController.login);
  router.post('/auth/register', userController.register);
  router.get('/auth/user',  authMiddleware, userController.me);
  // Sign by Google
  router.get('/auth/google',  passport.authenticate('google', { scope: ['profile', 'email'] }) );
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
    .post(subjectController.create)
    .get(subjectController.getAll);

  router
    .route("/subjects/:slug")
    .get(subjectController.getBySlug)
    .put(subjectController.update)
    .delete(subjectController.delete);

  // =========================
  // TOPIC ROUTES
  // =========================
  router
    .route("/subjects/:subSlug/topics")
    .post(topicController.create)
    .get(topicController.getBySubjectSlug);

  router
    .route("/subjects/:subSlug/topics/:topSlug")
    .get(topicController.getByTopicSlug)
    .put(topicController.update)
    .delete(topicController.delete);

  // =========================
  // QUIZ ROUTES
  // =========================
  router
    .route("/subjects/:subSlug/topics/:topSlug/quizzes")
    .post(quizController.create)
    .get(quizController.getByTopic);

  router
    .route("/subjects/:subSlug/topics/:topSlug/quizzes/:uuid")
    .get(quizController.getByUuid)
    .put(quizController.update)
    .delete(quizController.delete);

  return router;
};
