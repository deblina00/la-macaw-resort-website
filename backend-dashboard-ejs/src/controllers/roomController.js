const Room = require("../models/Room");
const Branch = require("../models/Branch");
const {
  createRoomSchema,
  updateRoomSchema,
} = require("../validations/roomValidation");

// exports.listRooms = async (req, res) => {
//   const rooms = await Room.find().populate("branchId").sort({ createdAt: -1 });

//   res.render("rooms/list", {
//     title: "Rooms",
//     rooms,
//   });
// };

exports.listRooms = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10; // rooms per page
    const skip = (page - 1) * limit;

    const totalRooms = await Room.countDocuments();

    const rooms = await Room.find()
      .populate("branchId")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalPages = Math.ceil(totalRooms / limit);

    res.render("rooms/list", {
      title: "Rooms",
      rooms,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.createRoomPage = async (req, res) => {
  const branches = await Branch.find();

  res.render("rooms/create", {
    title: "Create Room",
    branches,
  });
};

exports.createRoom = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = createRoomSchema.validate(body);

    if (error) {
      const branches = await Branch.find();
      return res.render("rooms/create", {
        title: "Create Room",
        error: error.details[0].message,
        branches,
      });
    }

    const gallery = req.files?.map((file) => file.path) || [];

    const amenities = body.amenities
      ? body.amenities.split(",").map((a) => a.trim())
      : [];

    await Room.create({
      title: body.title,
      branchId: body.branchId,
      price: body.price,
      capacity: body.capacity,
      totalBed: body.totalBed,
      amenities,
      gallery,
      description: body.description,
    });

    res.redirect("/admin/rooms");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.editRoomPage = async (req, res) => {
  const room = await Room.findById(req.params.id);
  const branches = await Branch.find();

  res.render("rooms/edit", {
    title: "Edit Room",
    room,
    branches,
  });
};

exports.updateRoom = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = updateRoomSchema.validate(body);

    if (error) {
      const branches = await Branch.find();
      const room = await Room.findById(req.params.id);

      return res.render("rooms/edit", {
        title: "Edit Room",
        error: error.details[0].message,
        room,
        branches,
      });
    }

    const amenities = body.amenities
      ? body.amenities.split(",").map((a) => a.trim())
      : [];

    const gallery = req.files?.map((file) => file.path) || [];

    const updateData = {
      title: body.title,
      branchId: body.branchId,
      price: body.price,
      capacity: body.capacity,
      totalBed: body.totalBed,
      amenities,
      description: body.description,
    };

    if (gallery.length) {
      updateData.gallery = gallery;
    }

    await Room.findByIdAndUpdate(req.params.id, updateData);

    res.redirect("/admin/rooms");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.deleteRoom = async (req, res) => {
  await Room.findByIdAndDelete(req.params.id);

  res.redirect("/admin/rooms");
};
