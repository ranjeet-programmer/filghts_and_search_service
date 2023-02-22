const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);

    return res.status(201).json({
      data: city,
      success: true,
      message: "successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

// METHOD : DELETE  Ex : /city/:id  so we will get ID in the request param
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);

    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully deleted a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a city",
      err: error,
    });
  }
};

// METHOD : PATCH /city/:id  with data we want to update will be in req.body

const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);

    return res.status(201).json({
      data: city,
      success: true,
      message: "successfully updated the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};

// METHOD : GET  Ex : /city/:id  so we will get ID in the request param

const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);

    return res.status(201).json({
      data: city,
      success: true,
      message: "successfully get the city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
};
