let movies = [
  {
    id: 1,
    title: "A song of Fire and Ice",
    author: "Charles Dance",
  },
  {
    id: 2,
    title: "Star wars the last jedi",
    author: "Steven Spilberg",
  },
  {
    id: 3,
    title: "Tenet",
    author: "Christopher nolan",
  },
  {
    id: 4,
    title: "Justice League",
    author: "Zack Snyder",
  },
];

const getAllMovies = async (reg, reply) => {
  return getAllMovies;
};

const getMovies = async (reg, reply) => {
  const id = Number(reg.params.id);
  const movie = movies.find((movie) => movie.id === id);
  return movie;
};

const addMovies = async (req, reply) => {
  const id = movies.length + 1;
  const newMovies = {
    id,
    title: req.body.title,
  };
  movies.push(newMovies);
  return newMovies;
};

const updateMovies = async (req, reply) => {
  const id = Number(req.params.id);
  movies = movies.map((movie) => {
    if (movie.id === id) {
      return {
        id,
        title: req.body.title,
      };
    }
  });
  return {
    id,
    title: req.body.title,
  };
};

const deleteMovies = async (reg, reply) => {
  const id = Number(reg.params.id);
  movies = movies.filter((movie) => movie.id !== id);
  return { message: `Movie with ID ${id} is deleted` };
};

module.exports = {
  getAllMovies,
  getMovies,
  addMovies,
  updateMovies,
  deleteMovies,
};
