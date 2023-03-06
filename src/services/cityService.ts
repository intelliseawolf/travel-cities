import axios from "axios";

const serverURL = process.env.SERVER_URL || "https://localhost:3000/api";

const searchCity = (keyword: string) => {
  return axios.get(`${serverURL}/search_cities`, { params: { keyword } });
};

export { searchCity };
