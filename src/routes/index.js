const { Router } = require("express");

const carRoutes = require("./car.routes");

const router = Router();

router.use("/cars", carRoutes);

module.exports = router;
