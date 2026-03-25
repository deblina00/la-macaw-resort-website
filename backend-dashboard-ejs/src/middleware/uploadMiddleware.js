const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const createStorage = (folder) => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
      let resourceType = "image";

      if (
        file.mimetype === "application/pdf" ||
        file.mimetype.includes("word")
      ) {
        resourceType = "raw"; // ✅ FIX
      }

      return {
        folder: `la-macaw/${folder}`,
        resource_type: resourceType,
        public_id: Date.now() + "-" + file.originalname,
      };
    },
  });
};

const uploadRooms = multer({
  storage: createStorage("rooms"),
});

const uploadGallery = multer({
  storage: createStorage("gallery"),
});

const uploadBranches = multer({
  storage: createStorage("branches"),
});

const uploadOffers = multer({
  storage: createStorage("offers"),
});

const uploadBanquets = multer({
  storage: createStorage("banquets"),
});

const uploadEvents = multer({
  storage: createStorage("events"),
});

const uploadReviews = multer({
  storage: createStorage("reviews"),
});

const uploadCV = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
      const originalName = file.originalname
        .replace(/\.[^/.]+$/, "")
        .replace(/[^a-zA-Z0-9]/g, "_");

      let resourceType = "raw";

      // ✅ IMPORTANT CHANGE
      if (file.mimetype === "application/pdf") {
        resourceType = "image"; // 🔥 THIS FIXES PREVIEW
      }

      return {
        folder: "la-macaw/careers",
        resource_type: resourceType,
        public_id: Date.now() + "-" + originalName,
      };
    },
  }),

  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf" || file.mimetype.includes("word")) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF/DOC/DOCX allowed"));
    }
  },
});

module.exports = {
  uploadRooms,
  uploadGallery,
  uploadBranches,
  uploadOffers,
  uploadBanquets,
  uploadEvents,
  uploadReviews,
  uploadCV,
};
