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
      update_at: {
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
    Session.belongsTo(models.users);
  }
  return Session;
};