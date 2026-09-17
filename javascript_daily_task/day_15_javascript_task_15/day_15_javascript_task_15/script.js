const movies = [
  {
    title: "Avengers",
    year: 2012,
    genre: "Action"
  },
  {
    title: "Annabelle",
    year: 2010,
    genre: "Horror"
  },
  {
    title: "With Love",
    year: 2026,
    genre: "Romance"
  },
  {
    title: "Joker",
    year: 2019,
    genre: "Drama"
  },
  {
    title: "American Psycho",
    year: 2014,
    genre: "Sci-Fi"
  }
];

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const movieList = document.querySelector("#movieList");

function displayMovies(movieArray) {
  movieList.innerHTML = "";

  movieArray.forEach((movie) => {
    const card = document.createElement("div");

    card.className = "bg-white p-4 rounded shadow";

    card.innerHTML = `
      <h2 class="text-xl font-bold">${movie.title}</h2>
      <p>Year: ${movie.year}</p>
      <p>Genre: ${movie.genre}</p>
    `;

    movieList.append(card);
  });
}

searchBtn.addEventListener("click", () => {
  const searchText = searchInput.value.toLowerCase();

  const result = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText)
  );

  displayMovies(result);
});

displayMovies(movies);