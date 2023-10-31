const News = require("./model/newsModel");
const data = require("./data");

const DefaultData = async () => {
  try {
    await News.insertMany(data);
    console.log("Data imported Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

module.exports = DefaultData;
