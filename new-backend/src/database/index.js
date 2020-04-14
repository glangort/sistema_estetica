const Sequelize = require('sequelize');
const dbConfig = require('../configuration/database');

const User = require('../models/User');
const Client = require('../models/Client');
const Schedule = require('../models/Schedule');
const Anamnese = require('../models/Anamnese');
const Measures = require('../models/Measures');

const connection = new Sequelize(dbConfig);

User.init(connection);
Client.init(connection);
Schedule.init(connection);
Anamnese.init(connection);
Measures.init(connection);

Schedule.associate(connection.models);
Client.associate(connection.models);
Anamnese.associate(connection.models);
Measures.associate(connection.models);

module.exports = connection;
