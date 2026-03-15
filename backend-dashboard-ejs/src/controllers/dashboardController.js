const Branch = require("../models/Branch");
const Room = require("../models/Room");
const Offer = require("../models/Offer");
const Enquiry = require("../models/Enquiry");
const Event = require("../models/Event");

exports.dashboard = async (req, res) => {
  const branches = await Branch.countDocuments();
  const rooms = await Room.countDocuments();
  const offers = await Offer.countDocuments();
  const enquiries = await Enquiry.countDocuments();
  const events = await Event.countDocuments();

  res.render("dashboard/index", {
    title: "Dashboard",
    stats: {
      branches,
      rooms,
      offers,
      enquiries,
      events,
    },
  });
};
