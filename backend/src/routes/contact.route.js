import express from "express";
import auth from "../middlewares/auth.middleware.js";
import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact
} from "../controllers/contact.controller.js";

const router = express.Router();

// All routes protected by JWT middleware
router.post("/contacts", auth, createContact);
router.get("/contacts", auth, getContacts);
router.get("/contacts/:id", auth, getContactById);
router.put("/contacts/:id", auth, updateContact);
router.delete("/contacts/:id", auth, deleteContact);

export default router;
