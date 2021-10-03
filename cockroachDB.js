const Sequelize = require("sequelize-cockroachdb");
// For secure connection:
const fs = require("fs");
const { username, password } = require("./config.json");

// Connect to CockroachDB through Sequelize.
var sequelize = new Sequelize({
  dialect: "postgres",
  username,
  password,
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  database: "snappy-ape-305.defaultdb",
  port: 26257,
  dialectOptions: {
    ssl: {
      //   rejectUnauthorized: false,
      // For secure connection:
      ca: fs.readFileSync("./certs/cc-ca.crt").toString(),
    },
  },
  logging: true,
});
// Define the Account model for the "accounts" table.
const Points = sequelize.define("points", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userID: {
    type: Sequelize.UUID,
  },
  points: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Points;
