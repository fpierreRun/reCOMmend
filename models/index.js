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
});
//comment belongs to search
Comments.belongsTo(Search, {
    foreignKey: 'search_id',
    onDelete: 'SET NULL'
});
//user has many comments
User.hasMany(Comments, {
    foreignKey: 'user_id',
});
//search has one comment
Search.hasOne(Comments, {
    foreignKey: 'search_id',
})
//
module.exports = { User, Search, Comments };