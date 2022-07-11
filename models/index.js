const User = require('./User');
const Search = require('./Search');
const Comments = require('./Comments');
User.hasMany(Search, {
    foreignKey: 'user_id'
});

Search.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
//user belongs to comment
Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})
//comment belongs to search
Comment.belongsTo(Search, )

module.exports = { User, Search, Comments };