const Car = require("../models/CarModel");

module.exports = async function createCarService(data) {
  const createCar = new Car(data);
  const car = await createCar.save();

  return car;
};
