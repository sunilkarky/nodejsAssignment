// for local machine host

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "nodejsassignment", ///dbname
    dialect: "mysql",//db type
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };