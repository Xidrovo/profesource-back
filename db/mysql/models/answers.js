module.exports = (sequelize, DataTypes) => {
  const Answers = sequelize.define(
    "Answer",
    {
      idAnswer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
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
      Answer: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Answer is missing",
          },
          notEmpty: {
            msg: "Answer must not be empty",
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
      tableName: "ANSWER",
      underscored: true,
      name: {
        singular: "ANSWER",
        plural: "ANSWERS",
      },
      sequelize,
    }
  );
  Answers.associate=(models) => {
     Answers.belongsTo(models.users);
     Answers.belongsTo(models.posts);
  };
  return Answers;
};