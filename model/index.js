const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

// la sequelize yo config haru lag ani database connect gardey vaneko hae 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
//for localhost sql uses 3306 by default linxa yo cahi nalekhda huhnxa local host ma
// port:3306,


  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("CONNECTED!!");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;;
db.sequelize = sequelize;

// importing model  ko files 
db.posts = require("./postModel.js")(sequelize, DataTypes); //table of ourmodel ie postmodel lai


//thikka db.blogs ra user ko tala aba relation dekhauney so we can access whose blog is that
//so we make a user id new column at blogs suing relation

// db.users.hasMany(db.blogs)   //yo chai advance js class ko relation dekhako ho see in advance js class
// db.blogs.belongsTo(db.users)   //yo chai relation banako yati garda aba uta gara chechk garda aauda
                                // aba yasmadirect column add garna garo hunxa sql ma so we make talaka false true banaunu prxa jsle sab data udaidinxanai pheri false garda hunxa
                                //tara mongo hruma direct hunxa
db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done");
});

module.exports = db;