const News = require("../model/newsModel");

exports.getNews = async (req, res) => {
  try {
    const size = Number(req.query.size);
    const skip = Number(req.query.page);
    console.log(size, skip);
    const data = await News.find({})
      .limit(size)
      .skip(size * skip);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
