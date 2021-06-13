const db = require("./db");

const showCar = require("../src/services/ShowCarService");
const Car = require("../src/models/CarModel");

beforeAll(async () => await db.connect());

afterEach(async () => await db.clearDatabase());

afterAll(async () => await db.closeDatabase());

describe("ShowCar", () => {
  it("should be able to show a car", async () => {
    const newCar = await new Car({
      marca: "Toyota",
      modelo: "Yaris Hatch",
      versao: "1.5",
      ano: 2020,
      quilometragem: 21000,
      tipo_cambio: "automatico",
      preco: 85900,
    }).save();

    const car = await showCar(newCar._id);

    expect(car.modelo).toEqual("Yaris Hatch");
  });
});
