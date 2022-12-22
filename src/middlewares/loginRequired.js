const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;


    if (!authorization) {
        return res.status(401).json({
            erros: ["login Required"],
        });
    }

    const [, token] = authorization.split(" ");

    try {

        const data = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, email } = data;

        req.userid = id;
        req.useremail = email;

        return next();

    } catch (e) {
        return res.status(401).json({
            erros: ["invalid or expired token"],
        });
    }

}