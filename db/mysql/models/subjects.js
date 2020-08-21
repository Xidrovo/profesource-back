module.exports = (sequelize, DataTypes) => {
  const Subjects = sequelize.define(
    "Subjects",
    {
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
    Subjects.hasMany(models.post_materia);
  }
  return Subjects;
};