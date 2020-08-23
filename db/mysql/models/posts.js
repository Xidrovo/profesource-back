module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    "Posts",
    {
      id_Post: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      Title: {
        type: DataTypes.TEXT,
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
            msg: "user must only contain letters",
          },
        },
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
            args: [["APPROVED", "DENIED", "ONHOLD"]],
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
            args: [[true, false]],
            msg: "state not allowed",
          },
        },
      },
    },
    {
      tableName: "POST",
      underscored: false,
      name: {
        singular: "POST",
        plural: "POSTS",
      },
      sequelize,
    }
  );
  Posts.associate = (models) => {
    Posts.belongsTo(models.User, {
      foreignKey: "username",
      foreignKeyConstraint: true,
    });
    Posts.hasMany(models.Answer,{
      foreignKey: "id_Post",
    });
    Posts.belongsToMany(models.Subjects, { through: "Posts_Materias",as: 'Post_Materia', foreignKey: 'id_Post'});
    Posts.belongsToMany(models.Tags, { through: "Posts_Tags",as: 'Post_Tags', foreignKey: 'id_Post'});
  };
  return Posts;
};
