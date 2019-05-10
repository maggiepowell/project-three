var db = require("../models");

module.exports = function (app) {
    // Get all profiles
    app.get("/api/profiles", function (req, res) {
        db.Profiles.findAll({}).then(function (dbWannagetajob) {
            res.json(dbWannagetajob);
        });
    });

    // Creates new profile
    app.post("/api/profiles/", function (req, res) {
        console.log(req.body);
            db.Profiles.create({
                username: DataTypes.STRING,
                overall_score: DataTypes.INTERGER,
                score_memory: DataTypes.INTERGER,
                score_trivia: DataTypes.INTERGER,
                score_minesweeper: DataTypes.INTERGER,
                score_math: DataTypes.INTERGER
            }).then(function (dbWannagetajob) {
                res.json(dbWannagetajob);
            });
    });
}
