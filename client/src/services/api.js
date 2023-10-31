import axios from "axios";

const URL = "http://localhost:5000";

export const getNews = async (page, size = 5) => {
  try {
    return await axios.get(`${URL}/news?page=${page}&size=${size}`);
  } catch (err) {
    console.log("error while calling getNews Api");
  }
};
