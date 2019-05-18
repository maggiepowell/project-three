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

    // Updates Guest For Math Game
    app.post("/api/mathupdate", function(req, res) {
        console.log(req.body);
        db.Profiles.update({
            score_math: req.body.score,
        },{
            where: {
                username: 'Guest'
            }
        })
        .then(function (response) {
            res.send(200).end();
        });
    });

    //Update Minesweeper Database for 
    app.post("/api/minesupdate", function(req, res) {
        var minesScore;

        db.Profiles.findOne({
            attributes: ['score_minesweeper'],
            where: {
                username: 'Guest'
            }
        }).then(function(response){
            minesScore = response.score_minesweeper;
            minesScore++;
            console.log(minesScore);
            return minesScore;
        }).then(function(){
            console.log(minesScore);
            return db.Profiles.update({
                score_minesweeper: minesScore,
            },{
                where: {
                    username: 'Guest'
                }
            })
        }).then(function (response) {
            res.send(200).end();
        });
    });

    //Feel good quiz database update
    app.post("/api/feelgoodquiz", function(req, res) {
        var quizScore;

        db.Profiles.findOne({
            attributes: ['score_trivia'],
            where: {
                username: 'Guest'
            }
        }).then(function(response){
            quizScore = response.score_trivia;
            quizScore++;
            console.log(quizScore);
            return quizScore;
        }).then(function(){
            console.log(quizScore);
            return db.Profiles.update({
                score_trivia: quizScore,
            },{
                where: {
                    username: 'Guest'
                }
            })
        }).then(function (response) {
            res.send(200).end();
        });
    });

    // Returns top scores for all games
    app.get("/api/champions", function(req, res) {
        const leaderPromise = db.Profiles.findAll({
            attributes: ['username', 'leader_score'],
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
            attributes: ['username', 'score_memory'],
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
            attributes: ['username', 'score_math'],
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
            attributes: ['username', 'score_minesweeper'],
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
            attributes: ['username', 'score_trivia'],
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
