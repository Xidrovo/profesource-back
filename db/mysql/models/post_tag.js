module.exports = (sequelize, DataTypes) => {
  const Posts_tag = sequelize.define(
    "Posts_Tag",
    {
      idPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
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
    Posts_tag.belongsTo(models.Posts,{
      foreignKey: 'id_Post',
      foreignKeyConstraint: true,
    });
    Posts_tag.hasOne(models.Tags);
  }
  return Posts_tag;
};