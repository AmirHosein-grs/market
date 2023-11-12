import axios from "axios";

const callApi = () => {
  const axiosInstance = axios.create({
    baseURL: "https://api.bgcrypto.io/v1",
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      throw err;
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      const res = err?.response;
      if (res) {
        if (res.status === 422) {
          console.log("eroor 422");
        }
      }
      {
        throw err;
      }
    }
  );
  return axiosInstance;
};

export default callApi;
