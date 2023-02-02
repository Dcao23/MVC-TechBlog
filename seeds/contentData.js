const { Content } = require('../models');

const contentData = [
    {
        title: '',
        blog: '',
        date: '',
    }
];

const seedContent = () => Content.bulkCreate(contentData);
module.exports = seedContent;