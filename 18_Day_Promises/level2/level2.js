//1.Print out all the cat names in to catNames variable.

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "44f556289bmsh18174bf26e00713p1fca73jsn13ed896dd14b",
    "X-RapidAPI-Host": "catbreeddb.p.rapidapi.com",
  },
};

fetch("https://catbreeddb.p.rapidapi.com/paginated/", options)
  .then((response) => response.json())
  .then((data) => {
    let result = [];
    result.push(data);
    console.log("result", result[0].results);
    return result[0].results.map((d) => {
      console.log("name of countries => ", d.breedName);
    });
  })
  .catch((err) => console.error(err));
