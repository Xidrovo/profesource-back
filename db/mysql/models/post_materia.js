
module.exports = (sequelize, DataTypes) => {
  const Post_materias = sequelize.define(
    "Posts_materias",
    {
      idPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      Subject_name: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
           notNull: {
             msg: "user name is missing",
           },
           notEmpty: {
             msg: "user name must not be empty",
           },
           not: {
             args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
             msg: "user must only contain letters",
           },
         },
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
      tableName: "POST_MATERIA",
      underscored: true,
      name: {
        singular: "POST_MATERIA",
        plural: "POST_MATERIAS",
      },
      sequelize,
    }
  );
  Post_materias.associate=(models) => {
      Post_materias.belongsTo(models.posts);
      Post_materias.belongsTo(models.subjects);
  };
  return Post_materias;
};