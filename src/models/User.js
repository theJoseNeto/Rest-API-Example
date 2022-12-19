const { Model, DataTypes } = require("sequelize");
const { hash } = require("bcrypt");
class User extends Model {
    static init(sequelize) {
        super.init({

            name: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "",
                validate: { len: { args: [3, 50], msg: "This field must be between 3 and 50 characters. Please try again." } },
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "",
                validate: { isEmail: { msg: "Invalid e-mail. Please type a valid email" } },
            },

            password: {
                type: DataTypes.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 50],
                        msg: 'this field must be between 6 and 50 characters'
                    },
                },
            },

            password_hash: {
                type: DataTypes.STRING,
                defaultValue: "",
            },


        }, { sequelize })

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
              user.password_hash = await hash(user.password, 8);
            }
          });
      
          return this;
    };
};

module.exports = User;