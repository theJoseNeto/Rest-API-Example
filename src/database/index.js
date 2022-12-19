const dbConfig = require("../config/database");
const { Sequelize } = require("sequelize");
const Student = require("../models/Student");
const User = require("../models/User");
const connection = new Sequelize(dbConfig);

const models = [Student, User];

models.forEach(model => model.init(connection));

module.exports = connection;
