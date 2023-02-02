const User = require('./User');
const Comment = require('./Comment');
const Content = require('./Content');

User.hasMany(Content, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Content.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Comment, Content };