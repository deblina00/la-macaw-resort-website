// const Branch = require("../models/Branch");
// const Room = require("../models/Room");
// const Offer = require("../models/Offer");
// const Enquiry = require("../models/Enquiry");
// const Event = require("../models/Event");

// exports.dashboard = async (req, res) => {
//   const branches = await Branch.countDocuments();
//   const rooms = await Room.countDocuments();
//   const offers = await Offer.countDocuments();
//   const enquiries = await Enquiry.countDocuments();
//   const events = await Event.countDocuments();

//   res.render("dashboard/index", {
//     title: "Dashboard",
//     stats: {
//       branches,
//       rooms,
//       offers,
//       enquiries,
//       events,
//     },
//   });
// };

const Branch = require("../models/Branch");
const Room = require("../models/Room");
const Offer = require("../models/Offer");
const Enquiry = require("../models/Enquiry");
const Event = require("../models/Event");
const Review = require("../models/Review");

exports.dashboard = async (req, res) => {
  try {

    const branches = await Branch.countDocuments();
    const rooms = await Room.countDocuments();
    const offers = await Offer.countDocuments();
    const enquiries = await Enquiry.countDocuments();
    const events = await Event.countDocuments();
    const reviews = await Review.countDocuments();

    /* Monthly Enquiries */

    const monthly = await Enquiry.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          total: { $sum: 1 }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    const months = [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec"
    ];

    const enquiryGraph = months.map((m, i) => {
      const found = monthly.find(x => x._id === i + 1);
      return found ? found.total : 0;
    });

    /* Enquiry Type Pie */

    const enquiryType = await Enquiry.aggregate([
      {
        $group: {
          _id: "$enquiryType",
          total: { $sum: 1 }
        }
      }
    ]);

    const typeLabels = enquiryType.map(e => e._id);
    const typeData = enquiryType.map(e => e.total);

    /* Latest Enquiries */

    const latestEnquiries = await Enquiry.find()
      .sort({ createdAt: -1 })
      .limit(4);

    /* Latest Reviews */

    const latestReviews = await Review.find()
      .sort({ createdAt: -1 })
      .limit(4);

    res.render("dashboard/index", {
      title: "Dashboard",
      stats: {
        branches,
        rooms,
        offers,
        enquiries,
        events,
        reviews
      },
      enquiryGraph,
      typeLabels,
      typeData,
      latestEnquiries,
      latestReviews
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Dashboard error");
  }
};