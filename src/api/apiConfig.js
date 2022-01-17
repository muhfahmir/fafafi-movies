const apiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: "50885572f509c83eb26eff90e8dbe3c3",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
