const router = require('express').Router();
const sequelize = require('../config/connection');
const { Search, User, Comment } = require('../models');
const withAuth = require('../utils/auth')


router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    Search.findAll({
        attributes: [
            'id',
            'keyword',
            'timestamp'            
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment', 'search_id', 'user_id'],
            }
        ]
    })
    .then(dbSearchData => {
        // pass a single search history object into the homepage template
        const searchHistory = dbSearchData.map(search => search.get({ plain: true }));
        res.render('homepage', {
            searchHistory,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/search/:id', withAuth, (req, res) => {
    Search.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'keyword',
            'timestamp',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment', 'search_id', 'timestamp'],
            }
        ] 
    })
    .then(dbSearchData => {
        if (!dbSearchData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        // serialize the data
        const searchHistory = dbSearchData.get({ plain: true });

        // pass data to template
        res.render('single-post', {
            searchHistory,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;