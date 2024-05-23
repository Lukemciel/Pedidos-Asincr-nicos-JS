// const { param } = require("../../src/routes/routes")

window.onload = () => {
  const titleInput = document.querySelector("#title")
  const ratingInput = document.querySelector("#rating")
  const awardsInput = document.querySelector("#awards")
  const relDateInput = document.querySelector("#release_date")
  const lengthInput = document.querySelector("#length")
  const genreInput = document.querySelector("#genreName")
  const form = document.querySelector(".formulario")
  const path = window.location.pathname
  const parts = path.split("/")
  const id = parts[2]

  fetch(`http://localhost:3031/api/movies/${id}`)
    .then((response) => {
      return response.json()
    })
    .then((peliculas) => {
      console.log(peliculas.data);
      const movie = peliculas.data
      titleInput.value = movie.title
      ratingInput.value = movie.rating
      awardsInput.value = movie.awards
      relDateInput.value = movie.release_date.split('T', 1)[0]
      lengthInput.value = movie.length
      genreInput.value = movie.genre.name
    });


  // Funcionalidad de editar 

  const editBtn = document.querySelector("#editButton")
  const deleteBtn = document.querySelector("#deleteButton")


  editBtn.addEventListener("click", (e) => {
    e.preventDefault()
    
    // form.action = `/api/movies/update/${id}?_method=PUT`  
    // form.submit()
    // window.location.href = `http://localhost:3031/formulario/${id}`
  })
}