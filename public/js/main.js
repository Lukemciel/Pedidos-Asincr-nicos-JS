window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  const create = document.querySelector("#createBtn")
  container.setAttribute("class", "container");
  app.appendChild(container);

  create.addEventListener("click", (e) => {
    window.location.href = "http://localhost:3031/formularioCreate"
  })

  fetch("http://localhost:3031/api/movies")
    .then((response) => {
      return response.json()
    })
    .then((peliculas) => {

      let data = peliculas.data;

      data.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);

        card.addEventListener("click", (e) => {
          window.location.href = `http://localhost:3031/formulario/${movie.id} `
        })

      });
    })

};
