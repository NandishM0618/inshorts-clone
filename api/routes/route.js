const router = require("express").Router();

const { getNews } = require("../controllers/newsControllers");
router.use("/news", getNews);

module.exports = router;
