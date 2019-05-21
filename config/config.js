require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: process.env.MYSQL_TEST_USER,
    password: process.env.MYSQL_TEST_PASS,
    database: process.env.MYSQL_TEST_DB,
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "mysql://xgzgbgf2k53vm8lu:dmzhu940b5fezpbc@m7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/m064ciyoyzjfw7kv",
    dialect: "mysql"
  }
};
