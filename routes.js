const path = require("path");
// Importar express para usar Router ou middlewares, embora app.get seja suficiente
// const express = require('express');
const oceanData = require("./oceanData");
const logger = require("./middlewares/logger");

const VIEWS_ROOT = path.join(__dirname, "views");

function Routes(app) {
  // A função logger é usada como middleware na rota

  // Rota para a página inicial (index.html)
  app.get("/", logger, (req, res) => {
    res.sendFile("index.html", { root: VIEWS_ROOT });
  });

  app.post("/", logger, (req, res) => {
    res.send("POST: Dados recebidos na página inicial.");
  });

  // Rota para o mapa (mapa.html)
  app.get("/mapa", logger, (req, res) => {
    res.sendFile("mapa.html", { root: VIEWS_ROOT });
  });

  // Rota para a lista de oceanos (lista-oceanos.html)
  app.get("/lista-oceanos", logger, (req, res) => {
    res.sendFile("lista-oceanos.html", { root: VIEWS_ROOT });
  });

  // Página principal do oceano - Rota com parâmetro
  app.get("/oceano/:id", logger, (req, res) => {
    const oceanId = req.params.id;
    if (oceanData[oceanId]) {
      res.sendFile("oceano.html", { root: VIEWS_ROOT });
    } else {
      res.status(404).send("Oceano não encontrado");
    }
  });

  // Página de animais do oceano - Rota com parâmetro
  app.get("/oceano/:id/animais", logger, (req, res) => {
    const oceanId = req.params.id;
    if (oceanData[oceanId]) {
      res.sendFile("oceano-animais.html", { root: VIEWS_ROOT });
    } else {
      res.status(404).send("Oceano não encontrado");
    }
  });

  // API para dados dos oceanos
  app.get("/api/oceanos", logger, (req, res) => {
    res.json(Object.values(oceanData));
  });

  app.get("/api/oceano/:id", logger, (req, res) => {
    const oceanId = req.params.id;
    if (oceanData[oceanId]) {
      res.json(oceanData[oceanId]);
    } else {
      res.status(404).json({ error: "Oceano não encontrado" });
    }
  });

  // Tratamento de erro 404 para rotas não definidas
  app.use((req, res, next) => {
    res.status(404).send("Página não encontrada!");
  });
}

module.exports = Routes;
