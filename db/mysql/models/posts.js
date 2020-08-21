module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    "Posts",
    {
      idPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: flase,
        validate: {
          notNull: {
            msg: "username is missing",
          },
          notEmpty: {
            msg: "username must not be empty",
          },
          not: {
            args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
            msg: "user must only contain letters",
          },
        },
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description is missing",
          },
          notEmpty: {
            msg: "Description must not be empty",
          },
        },
      },
      File: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "File is missing",
          },
          notEmpty: {
            msg: "File must not be empty",
          },
        },
      },
      Punctuation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Punctuation is missing",
          },
          notEmpty: {
            msg: "Punctuation must not be empty",
          },
        },
      },
      Publication_date: {
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
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Status is missing",
          },
          notEmpty: {
            msg: "Status must not be empty",
          },
          isIn: {
            args: [["APPROVED", "DENIED","ONHOLD"]],
            msg: "Status not allowed",
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
            args: [[true,false]],
            msg: "state not allowed",
          },
        },
      }
    },
    {
      tableName: "POST",
      underscored: true,
      name: {
        singular: "POST",
        plural: "POSTS",
      },
      sequelize,
    }
  );
  return Posts;
};
