const kaelum = require("kaelum");
const app = kaelum();

app.setConfig({
});

const routes = require("./routes");
routes(app);

module.exports = app;
// app.start(3000);