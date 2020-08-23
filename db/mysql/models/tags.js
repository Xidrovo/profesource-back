module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define(
    "Tags",
    {
      idTag: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      TagName: {
        type: DataTypes.STRING,
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
      tableName: "TAG",
      underscored: false,
      name: {
        singular: "TAG",
        plural: "TAGS",
      },
      sequelize,
    }
  );
  Tags.associate = (models) => {
    Tags.belongsToMany(models.Tags, {
      through: "Posts_Tags",
      as: 'Tags', foreignKey: 'idTag',
    });
  };
  return Tags;
};
