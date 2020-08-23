module.exports = (sequelize, DataTypes) => {
  const Subjects = sequelize.define(
    "Subjects",
    {
      Subject_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
         validate: {
           notNull: {
             msg: "Subject name is missing",
           },
           notEmpty: {
             msg: "Subject name must not be empty",
           },
           not: {
             args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
             msg: "Subject must only contain letters",
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
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "status is missing",
          },
          notEmpty: {
            msg: "status must not be empty",
          },
          isIn: {
            args: [[true,false]],
            msg: "status not allowed",
          },
        },
      }
    },
    {
      tableName: "SUBJECT",
      underscored: true,
      name: {
        singular: "SUBJECT",
        plural: "SUBJECTS",
      },
      sequelize,
    }
  );
  Subjects.associate=(models)=>{
    Subjects.belongsToMany(models.Posts,
      { through: 'Posts_Materias',as: 'Subject', foreignKey: 'Subject_name' },
    );
  }
  return Subjects;
};