const Idea = require("../models/IdeaModel");

module.exports = async function updateIdeaService(ideaId, data) {
  const updateIdea = await Idea.findByIdAndUpdate(ideaId, data, { new: true });

  return updateIdea;
};
