//! 1. Fetch API
const url =
  "https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=substr";

async function get() {
  const res = await fetch(url);
  const response = await res.json();
  console.log(response);
  return response;
}

const res = get();
console.log(res);

//! 2. http module
const https = require("https");

async function getNumberOfMovies(substr) {
  //Endpoint: "https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=substr"
  const result = await count(substr);
  return result;
}

function count(substr) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "jsonmock.hackerrank.com",
      path: "/api/moviesdata/search/?Title=" + substr,
      method: "GET",
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const movies = JSON.parse(data);
        resolve(movies.total);
      });
    });

    req.on("error", (error) => {
      console.error("Error fetching movie data:", error);
      reject(error);
    });

    req.end();
  });
}
