const e = require("express");
const User = require("../models/User");

module.exports = {
    async index(req, res) {
        try {

            const users = await User.findAll();
            return res.json({ users });
        } catch (e) {
            return res.status(400).json({ errors: e.errors.map(err => err.message) });

        }
    },



    async store(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.create({ name, email, password });

            return res.status(200).json({ user });

        } catch (e) {
            return res.status(400).json({ errors: e.errors.map(err => err.message) });
        }
    },




    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) res.status(400).json({ err: "missing id" });

            const user = await User.findByPk(id);

            !user ? // if
                res.status(401).json({ err: "User not found" })
                : // else
                await user.update(req.body)
                    .then(newData => res.json(newData));

        } catch (e) {

            return res.status(400).json({ errors: e.errors.map(err => err.message) });

        }

    },



    async delete(req, res) {
        try {
            const { id } = req.params;

            if (!id) res.status(400).json({ err: "missing id" });

            const user = await User.findByPk(id);

            !user ? // if
                res.status(401).json({ err: "User not found" })
                : // else
                await user.destroy()
                    .then(() => res.json({ "User status": "Deleted :(" }));

        } catch (e) {

            return res.status(400).json({ errors: e.errors.map(err => err.message) });

        }

    },

}; 
