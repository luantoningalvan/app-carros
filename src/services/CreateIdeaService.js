const Idea = require("../models/IdeaModel");

module.exports = async function createIdeaService(data) {
  const createIdea = new Idea(data);
  const idea = await createIdea.save();

  return idea;
};
