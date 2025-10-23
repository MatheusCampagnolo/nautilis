const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/js", express.static(path.join(__dirname, "public", "js")));
app.use(express.json());

const routes = require("./routes");
routes(app);

module.exports = app;

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Servidor Express rodando em http://localhost:${PORT}`);
  });
}
