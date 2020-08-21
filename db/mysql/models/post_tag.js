module.exports = (sequelize, DataTypes) => {
  const Posts_tag = sequelize.define(
    "Posts_Tag",
    {
      idTag: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      idPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Date is missing",
          },
          notEmpty: {
            msg: "Date must not be empty",
          },
        },
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Date is missing",
          },
          notEmpty: {
            msg: "Date must not be empty",
          },
        },
      }
    },
    {
      tableName: "POST_TAG",
      underscored: true,
      name: {
        singular: "POST_TAG",
        plural: "POST_TAGS",
      },
      sequelize,
    }
  );
  Posts_tag.associate=(models)=>{
    Posts_tag.belongsTo(models.posts);
    Posts_tag.belongsTo(models.tags);
  }
  return Posts_tag;
};