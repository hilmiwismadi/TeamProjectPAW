const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const process = require("process");
const app = express();

const applyMiddlewares = require("./src/middleware/index.js");

const productRoute = require("./src/routes/product.route.js");
const mahasiswaRoute = require("./src/routes/MahasiswaRoutes.js");
const DosenRoute = require("./src/routes/dosenRoute.js");
const assignmentRoute = require("./src/routes/assignment.route.js");

// DOTENV CONFIG
dotenv.config();

applyMiddlewares(app);

app.use("/api/products", productRoute);
app.use("/mahasiswa", mahasiswaRoute);
app.use("/dosen", DosenRoute);
app.use("/api/assignments", assignmentRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server (Berhasil Connect)");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running in port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection failed", error);
  });
