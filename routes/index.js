// Routes
//===================================

const path = require("path");
const router = require("express").Router();
const htmlRoutes = require("./html.routes");
const apiRoutes = require("./api/api-routes");
const authRoutes = require("./auth/auth.routes");



// API Routes

router.use("/", htmlRoutes);
//<add any additional non-protected routes here>

router.use("/auth", authRoutes);
router.use("/api", apiRoutes);
//<add any additional protected routes here>



// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/index.html"));
// });

module.exports = router;
