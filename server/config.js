const dotenv = require("dotenv");

// Load env vars if env is not production
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "./server/config/local.env" });
}

module.exports = {
  PORT: process.env.PORT || 7777,
  JWT_SECRET: process.env.JWT_SECRET,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  INITIAL_CHIPS_AMOUNT: 100000,
  INFURA_API_KEY: process.env.INFURA_API_KEY || "4913daa7178a4c77823ddea002c39d00",
};
