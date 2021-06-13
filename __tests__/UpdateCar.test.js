const db = require("./db");

const updateCar = require("../src/services/UpdateCarService");
const Car = require("../src/models/CarModel");

beforeAll(async () => await db.connect());

afterEach(async () => await db.clearDatabase());

afterAll(async () => await db.closeDatabase());

describe("UpdateCar", () => {
  it("should be able to update a car", async () => {
    const newCar = await new Car({
      marca: "Peugout",
      modelo: "2008 Griffe",
      versao: "1.6",
      ano: 2017,
      quilometragem: 90000,
      tipo_cambio: "automatico",
      preco: 55000,
    }).save();

    const updatedCar = await updateCar(newCar._id, {
      marca: "Peugeot",
    });

    expect(updatedCar.marca).toEqual("Peugeot");
  });
});
