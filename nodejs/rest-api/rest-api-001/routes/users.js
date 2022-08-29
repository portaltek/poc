import express from "express";
import {
  createUser,
  getUser,
  getUsers,
  patchUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.patch("/:id", patchUser);

export default router;
