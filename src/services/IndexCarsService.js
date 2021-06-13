const Car = require("../models/CarModel");

module.exports = async function indexCarsService(filters) {
  const { ano_min, ano_max, preco_min, preco_max, ...rest } = filters || {};

  const query = {
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

  const findCars = await Car.find(query);

  return findCars;
};
