const movieController = require("../controllers/blogs");

const routes = [
  {
    method: "GET",
    url: "/api/movies",
    handler: movieController.getAllMovies,
  },
  {
    method: "GET",
    url: "/api/movies/:id",
    handler: movieController.getMovies,
  },
  {
    method: "POST",
    url: "/api/movies",
    handler: movieController.addMovies,
  },
  {
    method: "PUT",
    url: "/api/movies/:id",
    handler: movieController.updateMovies,
  },
  {
    method: "DELETE",
    url: "/api/movies/:id",
    handler: movieController.deleteMovies,
  },
];

module.exports = routes;
