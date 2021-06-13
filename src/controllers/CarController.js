const indexCarsService = require("../services/IndexCarsService");
const showCarService = require("../services/ShowCarService");
const updateCarService = require("../services/UpdateCarService");
const createCarService = require("../services/CreateCarService");

class CarController {
  async index(req, res) {
    const filters = req.query;

    const indexCars = await indexCarsService(filters);

    return res.send(indexCars);
  }

  async show(req, res) {
    const { id } = req.params;

    const showCar = await showCarService(id);

    return res.send(showCar);
  }

  async create(req, res) {
    const data = req.body;

    const createCar = await createCarService(data);

    return res.send(createCar);
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;

    const updateCar = await updateCarService(id, data);

    return res.send(updateCar);
  }
}

module.exports = CarController;
