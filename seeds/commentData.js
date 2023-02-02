const { Comment } = require('../models');

const commentData = [
    {
        Comment: '',
        date: '',
    }
];

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;