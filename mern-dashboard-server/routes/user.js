import express from "express";
const router = express.Router();

import * as fns from "../controllers/user.js";
import authMiddleware from "../middleware/auth.js";

router.route("/login", function (req, res) {
  fns.login;
});
router.route("/register", function (req, res) {
  fns.register;
});
router.route("/dashboard", function (req, res) {
  authMiddleware, fns.dashboard;
});
router.route("/users", function (req, res) {
  fns.getAllUsers;
});

export default router;