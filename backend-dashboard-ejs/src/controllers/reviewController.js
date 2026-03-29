const Review = require("../models/Review");
const {
  createReviewSchema,
  updateReviewSchema,
} = require("../validations/reviewValidation");

// exports.listReviews = async (req, res) => {
//   try {
//     const reviews = await Review.find().sort({ createdAt: -1 });

//     res.render("reviews/list", {
//       title: "Reviews",
//       reviews,
//     });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

exports.listReviews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 7;
    const skip = (page - 1) * limit;

    const rating = req.query.rating;

    let query = {};

    if (rating) {
      query.rating = rating;
    }

    const totalReviews = await Review.countDocuments(query);

    const reviews = await Review.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalPages = Math.ceil(totalReviews / limit);

    res.render("reviews/list", {
      title: "Reviews",
      reviews,
      currentPage: page,
      totalPages,
      rating,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createReviewPage = (req, res) => {
  res.render("reviews/create", {
    title: "Create Review",
  });
};

exports.createReview = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = createReviewSchema.validate(body);

    if (error) {
      return res.render("reviews/create", {
        title: "Create Review",
        error: error.details[0].message,
      });
    }

    await Review.create({
      guestName: body.guestName,
      rating: body.rating,
      comment: body.comment,
      location: body.location,
    });

    res.redirect("/admin/reviews");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.editReviewPage = async (req, res) => {
  const review = await Review.findById(req.params.id);

  res.render("reviews/edit", {
    title: "Edit Review",
    review,
  });
};

exports.updateReview = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = updateReviewSchema.validate(body);

    if (error) {
      const review = await Review.findById(req.params.id);

      return res.render("reviews/edit", {
        title: "Edit Review",
        error: error.details[0].message,
        review,
      });
    }

    await Review.findByIdAndUpdate(req.params.id, {
      guestName: body.guestName,
      rating: body.rating,
      comment: body.comment,
      location: body.location,
    });

    res.redirect("/admin/reviews");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);

  res.redirect("/admin/reviews");
};
