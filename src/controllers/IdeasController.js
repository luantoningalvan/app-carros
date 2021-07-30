const indexIdeasService = require("../services/IndexIdeiasService");
const showIdeaService = require("../services/ShowIdeaService");
const updateIdeaService = require("../services/UpdateIdeaService");
const createIdeaService = require("../services/CreateIdeaService");

class IdeasController {
  async index(req, res) {
    const filters = req.query;

    const indexIdeas = await indexIdeasService(filters);

    return res.send(indexIdeas);
  }

  async show(req, res) {
    const { id } = req.params;

    const showIdea = await showIdeaService(id);

    return res.send(showIdea);
  }

  async create(req, res) {
    const data = req.body;

    const createIdea = await updateIdeaService(data);

    return res.send(createIdea);
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;

    const updateIdea = await createIdeaService(id, data);

    return res.send(updateIdea);
  }
}

module.exports = IdeasController;
