import axios from "axios";
const backendURL = process.env.REACT_APP_BACKEND_URL;

export const getProduct = async () => {
  try {
    const requrl = `${backendURL}/product`;
    const response = await axios.get(requrl);

    return response.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};

export const addToCart = async (id, quantity) => {
  try {
    const requrl = `${backendURL}/addToCart`;
    const storedToken = localStorage.getItem("musicArtToken");
    const config = {
      headers: {
        token: storedToken,
      },
    };
    const payLoad = { id, quantity };
    const response = await axios.put(requrl, payLoad, config);
    return response.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};
