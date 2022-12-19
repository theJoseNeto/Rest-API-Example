const connection = require("./src/database");
const app = require("./src/app");
const port = process.env.APP_PORT || 3333;


connection.authenticate()
    .then(() => {
        app.listen(port, () => console.log("running!"));
    })
    .catch(e => {
        console.log("database not authenticated", e);
    })