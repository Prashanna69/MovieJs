function movieCard(data) {
  const list = data.d;
  const movieContainer = document.getElementById("Movie");
  movieContainer.innerHTML = "";
  list?.map((item) => {
    const id = item?.id;
    const title = item?.l;
    const poster = item?.i?.imageUrl;
    const movieDiv = document.createElement("div");
    movieDiv.id = "Movie";
    const image = document.createElement("img");
    image.src =
      poster ||
      "https://placehold.jp/191b38/ffffff/160x192.png?text=Loading...";
    image.style.width = "8rem";
    image.style.height = "10rem";
    image.style.cursor = "pointer";
    image.style.margin = "2rem";
    image.classList.add("hover-image");
    movieDiv.appendChild(image);

    const titleParagraph = document.createElement("p");
    titleParagraph.id = "Name";
    titleParagraph.textContent = title;
    movieDiv.appendChild(titleParagraph);

    movieContainer.appendChild(movieDiv);
    movieDiv.addEventListener("click", () => {
      window.location.href = `detail.html?movie=${id}`;
    });
    movieDiv.addEventListener("click", () => {
      const selectedMovieTitle = id;
      movieDetail(data, selectedMovieTitle);
    });
  });
}

function tvSeries(data) {
  const list = data.d;
  const tvSeriesList = list.filter((item) => item.q === "TV series");
  document.getElementById("Movie").setHTML = "";
  movieCard({ d: tvSeriesList });
}
function Vid(data) {
  const list = data.d;
  const videoList = list.filter((item) => item.q === "video");
  document.getElementById("Movie").setHTML = "";
  movieCard({ d: videoList });
}
function tvMovie(data) {
  const list = data.d;
  const tvMovieList = list.filter((item) => item.q === "TV movie");
  document.getElementById("Movie").setHTML = "";
  movieCard({ d: tvMovieList });
}
function feature(data) {
  const list = data.d;
  const featureList = list.filter((item) => item.q === "feature");
  document.getElementById("Movie").setHTML = "";
  movieCard({ d: featureList });
}
function fetchData() {
  fetch(
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "571b4bc263msh3d1dc73d8561fa7p17192fjsn5b580280960a",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      movieCard(data);
      document.getElementById("home").addEventListener("click", () => {
        movieCard(data);
      });

      document.getElementById("tvseries").addEventListener("click", () => {
        tvSeries(data);
      });
      document.getElementById("vid").addEventListener("click", () => {
        Vid(data);
      });
      document.getElementById("tvmovie").addEventListener("click", () => {
        tvMovie(data);
      });
      document.getElementById("feature").addEventListener("click", () => {
        feature(data);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
const handleClick = (id) => {
  const elements = document.getElementsByTagName("li");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("active");
  }
  document.getElementById(id).classList.add("active");
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home").classList.add("active");
});
document.addEventListener("DOMContentLoaded", fetchData);
