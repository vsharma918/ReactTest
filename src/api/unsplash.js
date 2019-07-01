import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1ea2fc37531a3d64e6ed3c65b279c866960369f7693e3433a293b7712badf072"
  }
});
