var express = require('express'),
    mongoose = require('mongoose'),
    app = express();

var Beer = require('./models/beers.js');

mongoose.connect('mongodb://localhost:27017/meandb');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('index.html');
});

app.get('/beers', (req, res) => {
    Beer.find((err, beers) => {
        res.send(beers);
    });
});

app.get('/beer/:id', (req, res) => {
    Beer.findOne({
        _id: req.params.id
    }, (err, beer) => {
        res.send(beer);
    });
});

app.listen(3000, () => {
    console.log('Server is running at locahost:3000.');
});