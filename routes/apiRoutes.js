var db = require("../models");
var Sequelize = require("../node_modules/sequelize/index") 

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

    // Returns top scores for all games
    app.get("/api/champions", function(req, res) {
        const overallPromise = Project.findAll({
            limit: 10,
            where: {
                overall_score :{
                    [Op.gte]: 0
                }
            },
            order: [
                ['overall_score', 'DESC']
            ]
        })
        const memoryPromise = Project.findAll({
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
        const mathPromise = Project.findAll({
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
        const seekerPromise = Project.findAll({
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
        const triviaPromise = Project.findAll({
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
        
        Promise.all([overallPromise, memoryPromise, mathPromise, seekerPromise, triviaPromise])
        .then((results) => {
            res.json({
                overall: results[0],
                memory: results[1],
                math: results[2],
                minesweeper: results[3],
                trivia: results[4]
            });
        })
    });
};
