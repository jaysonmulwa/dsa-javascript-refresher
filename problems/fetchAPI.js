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
