import axios from "axios";

const baseURL = "https://sainyojit.herokuapp.com/api/v1";

export default axios.create({
  baseURL,
});
