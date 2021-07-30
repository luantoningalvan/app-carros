const { Router } = require("express");

const ideasRoutes = require("./ideas.routes");

const router = Router();

router.use("/ideas", ideasRoutes);

module.exports = router;
