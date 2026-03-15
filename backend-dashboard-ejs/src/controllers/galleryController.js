const Gallery = require("../models/Gallery");

exports.listGallery = async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });

    res.render("gallery/list", {
      title: "Gallery",
      images
    });

  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.uploadPage = (req, res) => {
  res.render("gallery/upload", {
    title: "Upload Gallery Image"
  });
};

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.render("gallery/upload", {
        error: "Image is required"
      });
    }

    await Gallery.create({
      title: req.body.title,
      category: req.body.category,
      image: req.file.path
    });

    res.redirect("/admin/gallery");

  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteImage = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);

    res.redirect("/admin/gallery");

  } catch (err) {
    res.status(500).send(err.message);
  }
};