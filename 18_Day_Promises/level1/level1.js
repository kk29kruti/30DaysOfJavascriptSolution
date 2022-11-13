//1.Read the countries API using fetch and print the name of country, capital, languages,
//population and area.

const countries = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b0a4b7e3a8msh0ddd2edd444b5d6p193696jsn9cf1091d9ece",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions", options)
    .then((response) => response.json())
    .then((data) => {
      let result = [];
      result.push(data);
      console.log("result", result[0].data);
      return result[0].data.map((d) => {
        console.log("name of countries => ", d.name);
        console.log("population of countries => ", d.population);
        console.log("capital of countries => ", d.countryCode);
        console.log("region of countries => ", d.region);
        console.log("area of countries => ", d.latitude);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
countries();
