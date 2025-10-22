const path = require('path');
const oceanData = require("./oceanData");
const logger = require("./middlewares/logger");

const VIEWS_ROOT = path.resolve(__dirname, '..', 'views');

function Routes(app) {
  app.addRoute("/", {
    get: (req, res) => {
      logger(req, res, () => {});
      res.sendFile("index.html", { root: VIEWS_ROOT });
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

  // página principal do oceano
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

  // página de animais do oceano
  app.addRoute("/oceano/:id/animais", {
    get: (req, res) => {
      logger(req, res, () => {});
      const oceanId = req.params.id;
      if (oceanData[oceanId]) {
        res.sendFile("views/oceano-animais.html", { root: __dirname });
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
