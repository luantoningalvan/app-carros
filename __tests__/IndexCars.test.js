const db = require("./db");
const Car = require("../src/models/CarModel");
const indexCars = require("../src/services/IndexCarsService");

beforeAll(async () => {
  await db.connect();
});

beforeEach(async () => {
  await new Car({
    marca: "Nissan",
    modelo: "Versa",
    versao: "1.0",
    ano: 2021,
    quilometragem: 6.507,
    tipo_cambio: "manual",
    preco: 59990,
  }).save();

  await new Car({
    marca: "Toyota",
    modelo: "Yaris Hatch",
    versao: "1.5",
    ano: 2020,
    quilometragem: 21000,
    tipo_cambio: "automatico",
    preco: 85900,
  }).save();

  await new Car({
    marca: "Peugeot",
    modelo: "2008 Griffe",
    versao: "1.6",
    ano: 2017,
    quilometragem: 90000,
    tipo_cambio: "automatico",
    preco: 55000,
  }).save();

  await new Car({
    marca: "Fiat",
    modelo: "Palio",
    versao: "1.0",
    ano: 1997,
    quilometragem: 110000,
    tipo_cambio: "manual",
    preco: 9500,
  }).save();
});

afterEach(async () => await db.clearDatabase());

afterAll(async () => await db.closeDatabase());

describe("IndexCars", () => {
  it("should be able to list the cars", async () => {
    const cars = await indexCars();

    expect(cars.length).toEqual(4);
  });

  it("should be able to list the cars with year range", async () => {
    const cars = await indexCars({ ano_max: 2021, ano_min: 2017 });

    expect(cars.length).toEqual(3);
  });

  it("should be able to list the cars with price range", async () => {
    const cars = await indexCars({ preco_min: 50000, preco_max: 60000 });

    expect(cars.length).toEqual(2);
  });
});
