module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "username is missing",
          },
          notEmpty: {
            msg: "username must not be empty",
          },
          not: {
            args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
            msg: "username must only contain letters",
          },
        },
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is missing",
          },
          notEmpty: {
            msg: "Name must not be empty",
          },
          not: {
            args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
            msg: "Name must only contain letters",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Lastname is missing",
          },
          notEmpty: {
            msg: "Lastname must not be empty",
          },
          not: {
            args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
            msg: "Lastname must only contain letters",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Email is missing",
          },
          notEmpty: {
            msg: "Email must not be empty",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is missing",
          },
          notEmpty: {
            msg: "Password must not be empty",
          },
        },
      },
      // Date_Of_Birth: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      //   validate: {
      //     notNull: {
      //       msg: "Date of Birth is missing",
      //     },
      //     notEmpty: {
      //       msg: "Date of Birth must not be empty",
      //     },
      //   },
      // },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Gender is missing",
          },
          notEmpty: {
            msg: "Gender must not be empty",
          },
          isIn: {
            args: [["Male","Female"]],
            msg: "Gender not allowed",
          },
        },
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Country is missing",
          },
          notEmpty: {
            msg: "Country must not be empty",
          }
        }
      },
      rol: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Rol is missing",
          },
          notEmpty: {
            msg: "Rol must not be empty",
          },
          isIn: {
            args: [["Profesor","Estudiante"]],
            msg: "Rol not allowed",
          },
        },
      },
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "state is missing",
          },
          notEmpty: {
            msg: "state must not be empty",
          },
          isIn: {
            args: [[true, false]],
            msg: "state not allowed",
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
      tableName: "USER",
      underscored: false,
      name: {
        singular: "USER",
        plural: "USERS",
      },
      sequelize,
    }
  );
  User.associate=(models) => {
    User.hasMany(models.Posts,{
      foreignKey: 'username',
    });
    User.hasMany(models.Session,{
      foreignKey: 'username',
    });
    User.hasMany(models.Answer,{
      foreignKey: 'username',
    });

  };
  return User;
};
