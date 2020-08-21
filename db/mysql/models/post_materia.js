
module.exports = (sequelize, DataTypes) => {
  const Post_materia = sequelize.define(
    "Post_materia",
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
             msg: "Subject_name is missing",
           },
           notEmpty: {
             msg: "Subject_name must not be empty",
           },
           not: {
             args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
             msg: "Subject_name only contain letters",
           },
         },
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
      tableName: "POST_MATERIA",
      underscored: true,
      name: {
        singular: "POST_MATERIA",
        plural: "POST_MATERIAS",
      },
      sequelize,
    }
  );
  Post_materia.associate=(models) => {
      Post_materia.belongsTo(models.Posts,{
        foreignKey: 'id_Post',
        foreignKeyConstraint: true,
      });
      Post_materia.hasOne(models.Subjects);
  };
  return Post_materia;
};