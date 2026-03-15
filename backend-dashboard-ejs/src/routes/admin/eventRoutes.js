const express = require("express");
const router = express.Router();

const auth = require("../../middleware/authMiddleware");
const { uploadEvents } = require("../../middleware/uploadMiddleware");

const {
  listEvents,
  createEventPage,
  createEvent,
  editEventPage,
  updateEvent,
  deleteEvent
} = require("../../controllers/eventController");

router.get("/", auth, listEvents);

router.get("/create", auth, createEventPage);

router.post(
  "/create",
  auth,
  uploadEvents.array("images"),
  createEvent
);

router.get("/edit/:id", auth, editEventPage);

router.post(
  "/edit/:id",
  auth,
  uploadEvents.array("images"),
  updateEvent
);

router.get("/delete/:id", auth, deleteEvent);

module.exports = router;