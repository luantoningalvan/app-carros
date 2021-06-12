const { Router } = require("express");

const CarController = require("../controllers/CarController");
const { celebrate, Joi, Segments } = require("celebrate");

const carRouter = Router();

const carController = new CarController();

carRouter.get(
  "/",
  celebrate({
    [Segments.QUERY]: {
      marca: Joi.string(),
      modelo: Joi.string(),
      versao: Joi.string(),
      ano: Joi.number(),
      ano_min: Joi.number(),
      ano_max: Joi.number(),
      quilometragem: Joi.number(),
      tipo_cambio: Joi.string(),
      preco: Joi.number(),
      preco_min: Joi.number(),
      preco_max: Joi.number(),
    },
  }),
  carController.index
);

carRouter.get("/:id", carController.show);

carRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      marca: Joi.string().required(),
      modelo: Joi.string().required(),
      versao: Joi.string().required(),
      ano: Joi.number().min(1930).required(),
      quilometragem: Joi.number().min(0).required(),
      tipo_cambio: Joi.string().required(),
      preco: Joi.number().required(),
    },
  }),
  carController.create
);

carRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      marca: Joi.string(),
      modelo: Joi.string(),
      versao: Joi.string(),
      ano: Joi.number().min(1930),
      quilometragem: Joi.number().min(0),
      tipo_cambio: Joi.string(),
      preco: Joi.number(),
    },
  }),
  carController.update
);

module.exports = carRouter;
