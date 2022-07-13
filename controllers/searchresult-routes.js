const router = require('express').Router();

router.post('/',(req,res)=>{
    const results= fetch('https://tastedive.com/api/similar?q=' + req.body.keyword + '&type=' + req.body.type+ '&info=1&k='+ req.body.key)
    .then(results => {
        res.render('searchresults',
            results
        )
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports= router;