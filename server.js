const path = require('path')
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});
const axios = require('axios')

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.get('/searchresults', (req, res) =>{ 
    // res.json('you win')
    // console.log('success!')
    const keyword = req.query.q
    const type = req.query.type
    const k = req.query.k
    
    const api = 'https://tastedive.com/api/similar?q=' + keyword + '&type=' + type+ '&info=1&k='+k
    console.log(req.query)
    console.log(api)
    const response= axios(api)
        .then(response => {
        console.log(response)





        }).catch(err => {
        res.send(err)
        })
})

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});