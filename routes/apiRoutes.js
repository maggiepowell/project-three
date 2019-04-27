var db = require("../models");

module.exports = function (app) {
    // Get all travelers
    app.get("/api/profiles", function (req, res) {
        db.Travel.findAll({}).then(function (dbWannagetajob) {
            res.json(dbWannagetajob);
        });
    });

    // Creates new profile
    app.post("/api/profiles/", function (req, res) {
        console.log(req.body);
            db.Travel.create({
                username: DataTypes.STRING,
                password: DataTypes.STRING,
                email: DataTypes.STRING,
                name: DataTypes.STRING,
                birthday: DataTypes.STRING,
                rank: DataTypes.INTERGER
            }).then(function (dbWannagetajob) {
                res.json(dbWannagetajob);
            });
    });
}
