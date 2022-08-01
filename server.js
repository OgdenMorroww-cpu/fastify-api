const app = require("fastify")({
  logger: "true",
});

app.get("/", (reg, reply) => {
  reply.send({ message: "hello world fastify" });
});

const movieRoutes = require("./routes/blogs");
movieRoutes.forEach((route, index) => {
  app.route(route);
});

const start = async () => {
  try {
    await app.listen({ port: "3000" });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
