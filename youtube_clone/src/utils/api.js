import axios from "axios";

// axios'un temel ayarları yapılmış olan bir kopyasını oluştur
const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",

  headers: {
    "x-rapidapi-key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});

export default api;
