require("express-async-errors");
require("dotenv/config");

const cors = require("cors");

const express = require("express");

const AppError = require("./utils/AppError");

const routes = require("./routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use((error, req, res, next) => {
  if(error instanceof AppError){
      return res.status(error.statusCode).json({
          status: "error",
          message: error.message
      });
  }

  console.error(error);

  return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
  })
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server Listening on ${PORT}`));
