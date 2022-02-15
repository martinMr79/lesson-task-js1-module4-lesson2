const url = "https://breakingbadapi.com/api/characters/6";

const resultContainer = document.querySelector(".details");


async function getCharacter() {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  const movie = json[0];



  console.log();
  
  resultContainer.innerHTML =   `<h3>${movie.name}</h3>
                                <p>${movie.status}</p>
                                <div class="image"style ="background-image: url('${movie.img}')"></div>`

}

getCharacter();
