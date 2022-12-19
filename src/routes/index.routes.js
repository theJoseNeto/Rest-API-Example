const { Router } = require("express");
const StudentController = require("../controllers/StudentController");
const UserController = require("../controllers/UserController");


const routes = Router();

routes.get("/", (req, res) => res.status(200).json({ hello: "World" }));

routes.get("/student", StudentController.index);
routes.post("/student", StudentController.store);
routes.put("/student/:id", StudentController.update);
routes.delete('/student/:id', StudentController.delete);

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete('/users/:id', UserController.delete);


module.exports = routes;