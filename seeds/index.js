const sequelize = require('../config/connection');
const seedContent = require('./contentData');
const seedComment = require('./commentData');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedContent();
    await seedComment();
    process.exit(0);
};

seedAll();