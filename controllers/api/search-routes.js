const router = require('express').Router();
const { Search }= require('../../models');
const withAuth = require('../../utils/auth')


router.get('/',(req,res)=>{
    Search.findAll()
    .then(dbSearchData => res.json(dbSearchData))
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req,res)=>{
    if (req.session){    
        Search.create({
            keyword: req.body.query,
            user_id: req.session.user_id
        })
        .then(dbSearchData=> res.json(dbSearchData))
        console.log(dbSearchData)
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
})


module.exports = router;