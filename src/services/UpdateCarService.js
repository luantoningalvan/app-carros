const Car = require("../models/CarModel");

module.exports = async function updateCarService(carId, data) {
  const updateCar = await Car.findByIdAndUpdate(carId, data, { new: true });

  return updateCar;
};
