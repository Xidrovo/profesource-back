module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
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
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
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
  Answer.associate=(models) => {
     Answer.belongsTo(models.User,{
      foreignKey: 'username',
      foreignKeyConstraint: true,
     });
     Answer.belongsTo(models.Posts,{
      foreignKey: 'id_Post',
      foreignKeyConstraint: true,
     });
  };
  return Answer;
};