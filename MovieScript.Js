function getMovieCard(poster, title) {
  return `<div id="Movie">
      <div id="FirstMovie"><img src="${
        poster ||
        "https://placehold.jp/191b38/ffffff/160x192.png?text=Loading..."
      }" style="width: 10rem; height: 12rem; cursor:pointer"></div>
      <p id="Name">${title}</p>
  </div>`;
}

// function appendMovieCardListToSelector(list = [], selector) {
//   if (!selector) throw new Error("Selector should be passed");
//   list.map((item) => {
//     try {
//       const selectedEl = document.getElementById(selector);
//       if (!selectedEl)
//         throw new Error(
//           "Couldn't find the element with the selector" + selector
//         );
//       selectedEl.innerHTML += getMovieCard(item?.l, item?.i?.imageUrl);
//     } catch (err) {
//       console.error(err);
//     }
//   });
// }

function fetchMovieApi() {
  fetch(
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "025903040fmsh159f6b6795b1165p126bcdjsnb518fb5e7a01",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const data = data.d;
      const poster = getMovieCard(poster, title);
      // appendMovieCardListToSelector(data.d, "d");
    })
    .catch((err) => {
      console.error(err);
    });
}

function tvSeries(list = []) {
  list.map((item) => {
    getMovieCard(poster, title);
    if (genre === "TV series") {
      const movie = getMovieCard(poster, title);
      document.getElementById("Movie").innerHTML += movie;
    } else {
      return 0;
    }
  });
}

document.getElementById("tvSeries").addEventListener("click", function () {
  fetchMovieApi();
  tvSeries(list);
});
