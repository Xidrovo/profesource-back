module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    "Session",
    {
      idSession: {
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
      tableName: "Session",
      underscored: true,
      name: {
        singular: "Session",
        plural: "Sessions",
      },
      sequelize,
    }
  );
  Session.associate=(models)=>{
    Session.belongsTo(models.User,{
      foreignKey: 'username',
      foreignKeyConstraint: true,
    });
  }
  return Session;
};