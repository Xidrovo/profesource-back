module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
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
              msg: "Last name is missing",
            },
            notEmpty: {
              msg: "Last name must not be empty",
            },
            not: {
              args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
              msg: "Last name must only contain letters",
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
        status: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Status is missing"
            },
            notEmpty: {
              msg: "Status must not be empty",
            },
            isIn: {
              args: [["ACTIVE", "INACTIVE"]],
              msg: "Status not allowed",
            },
          },
        },
      },
      {
        tableName: "users",
        underscored: true,
        name: {
          singular: "user",
          plural: "users"
        },
        sequelize,
      }
    );
    User.associate=(models) => {
      User.hasMany(models.answers);
      User.hasMany(models.posts);
      User.hasMany(models.sessions);
    };
    return User;
  };