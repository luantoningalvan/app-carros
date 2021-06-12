const Car = require("../models/CarModel");

class CarController {
  async index(req, res) {
    const { ano_min, ano_max, preco_min, preco_max, ...rest } = req.query;

    const filters = {
      ...(ano_min &&
        ano_max && {
          ano: { $lte: ano_max, $gte: ano_min },
        }),

      ...(preco_min &&
        preco_max && {
          preco: { $lte: preco_max, $gte: preco_min },
        }),

      ...rest,
    };

    const findAllCars = await Car.find(filters);
    return res.send(findAllCars);
  }

  async show(req, res) {
    const { id } = req.params;

    const findCar = await Car.findById(id);

    if (!findCar) throw new Error("Carro não encontrado");

    return res.send(findCar);
  }

  async create(req, res) {
    const newCar = new Car(req.body);
    const result = await newCar.save();
    return res.send(result);
  }

  async update(req, res) {
    const { id } = req.params;

    const updateCar = await Car.findByIdAndUpdate(id, req.body, { new: true });

    return res.send(updateCar);
  }
}

module.exports = CarController;
