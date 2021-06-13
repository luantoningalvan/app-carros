const db = require("./db");

const createCar = require("../src/services/CreateCarService");

beforeAll(async () => await db.connect());

afterEach(async () => await db.clearDatabase());

afterAll(async () => await db.closeDatabase());

describe("CreateCar", () => {
  it("should be able to create a new car", async () => {
    const car = await createCar({
      marca: "Nissan",
      modelo: "Versa",
      versao: "1.0",
      ano: 2021,
      quilometragem: 6.507,
      tipo_cambio: "manual",
      preco: 59990,
    });

    expect(car).toHaveProperty("_id");
  });
});
