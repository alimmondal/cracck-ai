require("dotenv").config();
const express = require("express");
const cors = require('cors');
const { connect } = require("./utils/dbConnect");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connect();

// routes
const paintingRoutes = require("./routes/paintings.route.js");
app.use("/paintings", paintingRoutes);

// test route
app.get("/", (req, res) => {
  res.send({ data: "server running", status: 200 });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
