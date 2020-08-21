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
      tableName: "TAG",
      underscored: true,
      name: {
        singular: "TAG",
        plural: "TAGS",
      },
      sequelize,
    }
  );
  Tags.associate=(models)=>{
    Tags.hasMany(models.post_tag);
  }
  return Tags;
};