const kaelum = require("kaelum");
const app = kaelum();

app.setConfig({

});

const routes = require("./routes");
routes(app);

app.start(3000);