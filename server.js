require("dotenv").config();
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const playersRoutes = require("./routes/playersRouter.js");

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("connected to database");
    } else {
      console.log(`error connected to the database ${err}`);
    }
  }
);

server.use(express.json());

server.use(playersRoutes)

server.listen(process.env.PORT, () =>
  console.log("connected to the server....")
);

// server.listen(9000, () => {
//   console.log(`Server Running ${9000}`);
// });

server.use((error, req, res, next) => {
  res.status(500).end();
});
