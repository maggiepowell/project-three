var db = require("../models");
var Sequelize = require("../node_modules/sequelize/index");
const Op = Sequelize.Op;

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
            leader_score: DataTypes.INTERGER,
            score_memory: DataTypes.INTERGER,
            score_trivia: DataTypes.INTERGER,
            score_minesweeper: DataTypes.INTERGER,
            score_math: DataTypes.INTERGER
        }).then(function (dbWannagetajob) {
            res.json(dbWannagetajob);
        });
    });

    // Returns top scores for all games
    app.get("/api/champions", function(req, res) {
        const leaderPromise = db.Profiles.findAll({
            limit: 10,
            where: {
                leader_score :{
                    [Op.gte]: 0
                }
            },
            order: [
                ['leader_score', 'DESC']
            ]
        })
        const memoryPromise = db.Profiles.findAll({
            limit: 10,
            where: {
                score_memory :{
                    [Op.gte]: 0
                }
            },
            order: [
                ['score_memory', 'DESC']
            ]
        })
        const mathPromise = db.Profiles.findAll({
            limit: 10,
            where: {
                score_math :{
                    [Op.gte]: 0
                }
            },
            order: [
                ['score_math', 'DESC']
            ]
        })
        const seekerPromise = db.Profiles.findAll({
            limit: 10,
            where: {
                score_minesweeper :{
                    [Op.gte]: 0
                }
            },
            order: [
                ['score_minesweeper', 'DESC']
            ]
        })
        const triviaPromise = db.Profiles.findAll({
            limit: 10,
            where: {
                score_trivia :{
                    [Op.gte]: 0
                }
            },
            order: [
                ['score_trivia', 'DESC']
            ]
        })
        
        Promise.all([leaderPromise, memoryPromise, mathPromise, seekerPromise, triviaPromise])
        .then((results) => {
            res.json({
                leader: results[0],
                memory: results[1],
                math: results[2],
                minesweeper: results[3],
                trivia: results[4]
            });
        })
    });
};
