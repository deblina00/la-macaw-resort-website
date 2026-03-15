const app = require("./app");
const connectDB = require("./src/config/db");
const { PORT } = require("./src/config/env");
const logger = require("./src/utils/logger");

connectDB();

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});