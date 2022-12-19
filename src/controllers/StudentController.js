const Student = require("../models/Student");


module.exports = {
    async index(req, res) {
        const students = await Student.findAll();
        return students;
    },

    async store(req, res) {
        const { name, last_name, email, age } = req.body;

        await Student.create({ name, last_name, email, age }).then(students => {
            return res.status(200).json({ students });
        })

    },
    
    async update(req, res) { },
    async delete(req, res) { }

}