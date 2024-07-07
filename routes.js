const express = require("express");
const controllers = require("../app/controllers");

const appRouter = express.Router();
const apiRouter = express.Router();

/** Mount GET / handler */
appRouter.get("/", controllers.pinjam.index);
appRouter.post("/pinjam", controllers.pinjam.indexPost);

appRouter.get("/buku", controllers.buku.index);
appRouter.post("/buku", controllers.buku.addBuku);

apiRouter.get("/registrasi", controllers.registrasi.index);

appRouter.use(apiRouter);

module.exports = appRouter;
