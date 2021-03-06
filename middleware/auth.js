let database = require("../database");

let authCheck = (req, res, next) => {
    if (req.session.user) {
        if (database[req.session.user]) {
            req.user = database[req.session.user];
            next();
        };
    } else {
        res.redirect("/login");
    }
}

module.exports = authCheck;