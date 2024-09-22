const findD = async (url) => {
  const data =await fetch(url, {
    token: "c77c74e83805c01d9e967d4f7fa9cf",
  });
  console.log(data);
};


findD("https://api.sofarocean.com/marine-weather/v1/models/");
