const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { MONGO_URI, ADMIN_USERNAME, ADMIN_PASSWORD } = require("./src/config/env");

const Admin = require("./src/models/Admin");

const seedAdmin = async () => {
  await mongoose.connect(MONGO_URI);

  const existing = await Admin.findOne({ username: ADMIN_USERNAME });

  if (existing) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);

  await Admin.create({
    username: ADMIN_USERNAME,
    password: hashed,
    role: "superadmin"
  });

  console.log("Admin seeded successfully");
  process.exit();
};

seedAdmin();