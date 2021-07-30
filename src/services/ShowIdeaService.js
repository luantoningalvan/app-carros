const Idea = require("../models/IdeaModel");

module.exports = async function showIdeaService(ideaId) {
  const findIdea = await Idea.findById(ideaId);

  if (!findIdea) throw Error("Idearo não encontrado");

  return findIdea;
};
