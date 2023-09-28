module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("post", { //post is name of table in database in plurar form
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull : false
      },
      description: {
        type: DataTypes.STRING,
        allowNull:false
      },
      
    
    });
    return Post;
  };