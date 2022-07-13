const User = require('./User');
const Search = require('./Search');
const Comment = require('./Comment');
User.hasMany(Search, {
    foreignKey: 'user_id'
});

Search.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
//user belongs to comment
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
//comment belongs to search
Comment.belongsTo(Search, {
    foreignKey: 'search_id',
    onDelete: 'SET NULL'
});
//user has many comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
});
//search has one comment
Search.hasOne(Comment, {
    foreignKey: 'search_id',
})
//
module.exports = { User, Search, Comment };