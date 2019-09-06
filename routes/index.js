// Routes
//===================================

//Declarations
const router = require("express").Router();
const apiRoutes = require("./api/api-routes");
const authRoutes = require("./auth/auth.routes");

//Routes
router.use("/auth", authRoutes);
router.use("/api", apiRoutes);



module.exports = router;
