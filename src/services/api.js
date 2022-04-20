import axios from "axios";

const api = axios.create({
  baseURL: "https://autoluby.k8s.luby.me/"
});

api.interceptors.request.use(async config => {
  const token = "9C263441B59BBD25E47A4F6AD2483F35";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;