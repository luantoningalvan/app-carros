const mongoose = require("mongoose");
const { Schema } = mongoose;

const IdeaSchema = new Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  versao: { type: String, required: true },
  ano: { type: Number, required: true },
  quilometragem: { type: Number, required: true },
  tipo_cambio: { type: String, required: true },
  preco: { type: Number, required: true },
});

module.exports = mongoose.model("Idea", IdeaSchema);
