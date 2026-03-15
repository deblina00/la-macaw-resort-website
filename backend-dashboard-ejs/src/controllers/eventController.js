const Event = require("../models/Event");
const {
  createEventSchema,
  updateEventSchema
} = require("../validations/eventValidation");

exports.listEvents = async (req, res) => {
  try {

    const events = await Event.find().sort({ createdAt: -1 });

    res.render("events/list", {
      title: "Events",
      events
    });

  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createEventPage = (req, res) => {
  res.render("events/create", {
    title: "Create Event"
  });
};

exports.createEvent = async (req, res) => {
  try {

    const body = req.body || {};

    const { error } = createEventSchema.validate(body);

    if (error) {
      return res.render("events/create", {
        title: "Create Event",
        error: error.details[0].message
      });
    }

    const images = req.files?.map(file => file.path) || [];

    await Event.create({
      title: body.title,
      description: body.description,
      category: body.category,
      images
    });

    res.redirect("/admin/events");

  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.editEventPage = async (req, res) => {

  const event = await Event.findById(req.params.id);

  res.render("events/edit", {
    title: "Edit Event",
    event
  });
};

exports.updateEvent = async (req, res) => {
  try {

    const body = req.body || {};

    const { error } = updateEventSchema.validate(body);

    if (error) {
      const event = await Event.findById(req.params.id);

      return res.render("events/edit", {
        title: "Edit Event",
        error: error.details[0].message,
        event
      });
    }

    const updateData = {
      title: body.title,
      description: body.description,
      category: body.category
    };

    if (req.files && req.files.length) {
      updateData.images = req.files.map(file => file.path);
    }

    await Event.findByIdAndUpdate(req.params.id, updateData);

    res.redirect("/admin/events");

  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteEvent = async (req, res) => {

  await Event.findByIdAndDelete(req.params.id);

  res.redirect("/admin/events");
};