module.exports = function(sequelize, DataTypes) {
    var Profiles = sequelize.define(
        "Profiles",
        {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        name: DataTypes.STRING,
        birthday: DataTypes.STRING,
        rank: DataTypes.INTERGER
        },
        {
        freezeTableName: true
        }
    );
    return Profiles;
};