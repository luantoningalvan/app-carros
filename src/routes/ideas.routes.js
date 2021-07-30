const { Router } = require("express");

const IdeaController = require("../controllers/IdeasController");
const { celebrate, Joi, Segments } = require("celebrate");

const ideaRouter = Router();

const ideaController = new IdeaController();

ideaRouter.get(
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
  ideaController.index
);

ideaRouter.get("/:id", ideaController.show);

ideaRouter.post(
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
  ideaController.create
);

ideaRouter.put(
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
  ideaController.update
);

module.exports = ideaRouter;
