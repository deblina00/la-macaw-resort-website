const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const expressLayouts = require("express-ejs-layouts");

const app = express();

/* ---------------- GLOBAL MIDDLEWARE ---------------- */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

/* ---------------- VIEW ENGINE ---------------- */

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(expressLayouts);
app.set("layout", "layouts/main");

/* ---------------- STATIC FILES ---------------- */

app.use(express.static(path.join(__dirname, "src/public")));

/* ---------------- ROUTE INDEX IMPORTS ---------------- */

const apiRoutes = require("./src/routes/api");
const adminRoutes = require("./src/routes/admin");

/* ---------------- ROUTES ---------------- */

app.use("/api", apiRoutes);
app.use("/admin", adminRoutes);

/* ---------------- ROOT ---------------- */

app.get("/", (req, res) => {
  res.send("La Macaw Resort API Running");
});

module.exports = app;
