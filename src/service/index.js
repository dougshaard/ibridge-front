import axios from "axios";

const Api = axios.create({
  baseURL: "https://shielded-meadow-92683.herokuapp.com/",
});

export default Api;
