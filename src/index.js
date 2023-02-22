const express = require("express");
const bodyParser = require("body-parser");
const CityRepository = require("./repository/city-repository");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);

    const repo = new CityRepository();

    repo.createCity({ name: "mumbai" });
    repo.deleteCity(1);
  });
};

setupAndStartServer();
