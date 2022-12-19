const express = require("express");
const routes = require("./routes/index.routes");

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.appRoutes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json());
    };

    appRoutes() {
        this.app.use(routes);
    };

}

module.exports = new App().app;