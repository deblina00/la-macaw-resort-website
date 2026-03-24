const cloudinary = require("../config/cloudinary");
const { sendCareerEmail } = require("../services/emailService");

exports.applyCareer = async (req, res) => {
  try {
    let cvUrl = "";
    try {
      if (req.file) {
        const uploaded = await new Promise((resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              { resource_type: "auto", folder: "careers" },
              (err, result) => {
                if (err) reject(err);
                else resolve(result);
              },
            )
            .end(req.file.buffer);
        });

        cvUrl = uploaded.secure_url;
      }
    } catch (err) {
      console.log("CV upload failed");
    }

    await sendCareerEmail({
      ...req.body,
      cvUrl,
    });

    res.json({ success: true, message: "Application submitted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};
