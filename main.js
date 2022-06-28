// async function getMoveListe() {
//   try {
//     return await fetch("https://moviesmern.herokuapp.com/movies/all").then(
//       (response) => response.json()
//     );
//   } catch (err) {
//   } finally {
//   }
// }
// function printTheMoveListe() {
//   getMoveListe().then((result) => {
//     result.data.forEach(
//       (item) =>
//         (moveListe.innerHTML += ` <li>${item.movieName}<br>
//          <img 
//          src = "${item.image}"></li>`)
//     );
//   });
// }
// printTheMoveListe();

// async function postMyMove() {
//   const data = {
//     movie: {
//       image:
//         "https://upload.wikimedia.org/wikipedia/he/e/e0/Lightyear_Teaser_Poster.jpg",
//       linkToMovie:
//         " https//he.wikipedia.org/wiki/%D7%A9%D7%A0%D7%95%D7%AA_%D7%90%D7%95%D7%A8_%28%D7%A1%D7%A8%D7%98%29",
//       movieName: "power to move",
//       rating: "6",
//       synopsis: "sdvcsdmvdsvmjon",
//     },
//   };

//   try {
//     return await fetch("https://moviesmern.herokuapp.com/movies/saveMovie", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (err) {}
// }
// async function userInput() {
//   const newData = {
//     movie: {
//       image: imageInput.value,
//       linkToMovie: linkToMovieInput.value,
//       movieName: movieNameInput.value,
//       rating: ratingInput.value,
//       synopsis: synopsisInput.value,
//     },
//   };

//   try {
//     return await fetch("https://moviesmern.herokuapp.com/movies/saveMovie", {
//       method: "POST",
//       body: JSON.stringify(newData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (err) {}
// }
const BASIC_API =" https://api.openweathermap.org/data/2.5/";
const API_key = "da538454c23fde0d425b4b53c4ed8264"
const cityname = userSelect.value;
async function getWather(){
  try{
    return await fetch(`${BASIC_API }weather?q=${cityname}&appid=${API_key}`)
    .then(response=>response.json())
  }
  catch(err){
    console.log(error);
  }
  finally{}
}
function printWeather(){
  const cityname = userSelect.value;
  myP.innerHTML = "";
getWather (cityname).then(result=>{
  for (item in result){
    myP.innerHTML+=`<h1> ${item}:${result[item]}</h1> `
  } 
  })
}

