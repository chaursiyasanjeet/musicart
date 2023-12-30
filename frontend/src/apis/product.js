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
