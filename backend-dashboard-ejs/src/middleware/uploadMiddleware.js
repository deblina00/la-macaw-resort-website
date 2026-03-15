const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const createStorage = (folder) => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: `la-macaw/${folder}`,
      allowed_formats: ["jpg", "jpeg", "png", "webp"]
    }
  });
};

const uploadRooms = multer({
  storage: createStorage("rooms")
});

const uploadGallery = multer({
  storage: createStorage("gallery")
});

const uploadBranches = multer({
  storage: createStorage("branches")
});

const uploadOffers = multer({
  storage: createStorage("offers")
});

const uploadBanquets = multer({
  storage: createStorage("banquets")
});

const uploadEvents = multer({
  storage: createStorage("events")
});

const uploadReviews = multer({
  storage: createStorage("reviews")
});

module.exports = {
  uploadRooms,
  uploadGallery,
  uploadBranches,
  uploadOffers,
  uploadBanquets,
  uploadEvents,
  uploadReviews
};