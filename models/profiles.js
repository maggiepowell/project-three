module.exports = function(sequelize, DataTypes) {
    var Profiles = sequelize.define(
        "Profiles",
        {
            username: DataTypes.STRING,
            leader_score: DataTypes.INTEGER,
            score_memory: DataTypes.INTEGER,
            score_trivia: DataTypes.INTEGER,
            score_minesweeper: DataTypes.INTEGER,
            score_math: DataTypes.INTEGER
    },
        {
        freezeTableName: true
        }
    );
    return Profiles;
};