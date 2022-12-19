const { Model, DataTypes } = require("sequelize");

class Student extends Model {
    static init(sequelize) {
        super.init({

            name: DataTypes.STRING,

            last_name: DataTypes.STRING,

            email: DataTypes.STRING,

            age: DataTypes.INTEGER,

        }, { sequelize })
    };
};

module.exports = Student;