module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "3838ws38",
    DB: "jwtDemo",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };