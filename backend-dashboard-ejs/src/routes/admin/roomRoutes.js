const express = require("express");
const router = express.Router();

const auth = require("../../middleware/authMiddleware");
const { uploadRooms } = require("../../middleware/uploadMiddleware");

const {
  listRooms,
  createRoomPage,
  createRoom,
  editRoomPage,
  updateRoom,
  deleteRoom,
} = require("../../controllers/roomController");

router.get("/", auth, listRooms);
router.get("/create", auth, createRoomPage);

router.post("/create", auth, uploadRooms.array("gallery"), createRoom);

router.get("/edit/:id", auth, editRoomPage);
router.post("/edit/:id", auth, uploadRooms.array("gallery"), updateRoom);

router.get("/delete/:id", auth, deleteRoom);

module.exports = router;
