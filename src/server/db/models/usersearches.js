'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserSearches = sequelize.define('UserSearches', {
    zip_code: DataTypes.STRING,
    latitude: DataTypes.DECIMAL(9,6),
    longitude: DataTypes.DECIMAL(9,6),
    is_geolocated_query: DataTypes.BOOLEAN,
    user_ip: DataTypes.STRING,
    search_timestamp: DataTypes.DATE
  }, {});
  UserSearches.associate = function(models) {
    // associations can be defined here
  };
  return UserSearches;
};