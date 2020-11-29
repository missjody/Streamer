module.exports = function (sequelize, DataTypes) {
	var Shows = sequelize.define("Shows", {
		api_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		poster_path: {
			type: DataTypes.STRING,
			allowNull: false
		},
		media_type: {
			type: DataTypes.STRING,
			// allowNull: false
		},
		want_to_watch: {
			type: DataTypes.BOOLEAN
		},
		watching: {
			type: DataTypes.BOOLEAN
		},
		completed: {
			type: DataTypes.BOOLEAN
		}
	}, {
		freezeTableName: true
	});

	Shows.associate = function (models) {
		Shows.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Shows;
};
