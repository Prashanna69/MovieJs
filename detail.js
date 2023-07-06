function movieDetail(data, selectedMovieTitle) {
  const list = data?.d;
  const movieContainer = document.getElementById("movieDetail");

  movieContainer.innerHTML = "";
  list.map((item) => {
    const poster =
      item?.i?.imageUrl ||
      "https://placehold.jp/191b38/ffffff/160x192.png?text=Loading...";
    const id = item?.id;
    const title = item?.l;
    const type = item?.q;
    const rank = item?.rank;
    const actor = item?.s;
    const release = item?.y;
    if (id === selectedMovieTitle) {
      const mainElement = document.createElement("main");

      const titleElement = document.createElement("h2");
      titleElement.id = "movieTitle";
      titleElement.textContent = title;
      mainElement.appendChild(titleElement);

      const descDiv = document.createElement("div");
      descDiv.classList.add("Desc");

      const posterDiv = document.createElement("div");
      posterDiv.id = "moviePoster";
      const posterImage = document.createElement("img");
      posterImage.src = poster;
      posterImage.style.width = "15rem";
      posterDiv.appendChild(posterImage);
      descDiv.appendChild(posterDiv);

      const detailsDiv = document.createElement("div");
      detailsDiv.id = "movieDesc";
      detailsDiv.classList.add("movieLabel");

      const labels = [
        "Name:",
        "Type:",
        "Rank:",
        "Starring:",
        "Year-of-Release:",
      ];
      const values = [title, type, rank, actor, release];

      for (let i = 0; i < labels.length; i++) {
        const labelElement = document.createElement("label");
        labelElement.textContent = labels[i];
        labelElement.classList.add("same");
        const valueElement = document.createElement("p");
        valueElement.textContent = values[i];
        valueElement.classList.add("p");

        const detailDiv = document.createElement("div");
        detailDiv.classList.add("same", labels[i]);
        detailDiv.appendChild(labelElement);
        detailDiv.appendChild(valueElement);

        detailsDiv.appendChild(detailDiv);
      }

      descDiv.appendChild(detailsDiv);
      mainElement.appendChild(descDiv);
      movieContainer.appendChild(mainElement);
    }
  });
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movieTitle = urlParams.get("movie");

document.getElementById("movieTitle").textContent = movieTitle;
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
    movieDetail(data, movieTitle);
  })
  .catch((err) => {
    console.error(err);
  });
