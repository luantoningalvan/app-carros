const Car = require("../models/CarModel");

module.exports = async function showCarService(carId) {
  const findCar = await Car.findById(carId);

  if (!findCar) throw Error("Carro não encontrado");

  return findCar;
};
