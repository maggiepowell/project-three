module.exports = function(sequelize, DataTypes) {
    var Profiles = sequelize.define(
        "Profiles",
        {
            username: DataTypes.STRING,
            overall_score: DataTypes.INTERGER,
            score_memory: DataTypes.INTERGER,
            score_trivia: DataTypes.INTERGER,
            score_minesweeper: DataTypes.INTERGER,
            score_math: DataTypes.INTERGER
    },
        {
        freezeTableName: true
        }
    );
    return Profiles;
};