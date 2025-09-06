const oceanData = require("./oceanData");
const logger = require("./middlewares/logger");

function Routes(app) {
  app.addRoute("/", {
    get: (req, res) => {
      logger(req, res, () => {});
      res.sendFile("views/index.html", { root: __dirname });
    },
    post: (req, res) => {
      logger(req, res, () => {});
      res.send("POST: Dados recebidos na página inicial.");
    },
  });

  app.addRoute("/mapa", {
    get: (req, res) => {
      logger(req, res, () => {});
      res.sendFile("views/mapa.html", { root: __dirname });
    },
  });

  app.addRoute("/lista-oceanos", {
    get: (req, res) => {
      logger(req, res, () => {});
      res.sendFile("views/lista-oceanos.html", { root: __dirname });
    },
  });

  app.addRoute("/oceano/:id", {
    get: (req, res) => {
      logger(req, res, () => {});
      const oceanId = req.params.id;
      if (oceanData[oceanId]) {
        res.sendFile("views/oceano.html", { root: __dirname });
      } else {
        res.status(404).send("Oceano não encontrado");
      }
    },
  });

  // API para dados dos oceanos
  app.addRoute("/api/oceanos", {
    get: (req, res) => {
      logger(req, res, () => {});
      res.json(Object.values(oceanData));
    },
  });

  app.addRoute("/api/oceano/:id", {
    get: (req, res) => {
      logger(req, res, () => {});
      const oceanId = req.params.id;
      if (oceanData[oceanId]) {
        res.json(oceanData[oceanId]);
      } else {
        res.status(404).json({ error: "Oceano não encontrado" });
      }
    },
  });
}

module.exports = Routes;