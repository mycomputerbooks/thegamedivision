const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());



/// POST
app.post('/api/movies',(req,res)=>{
    let body = req.body;

    console.log(body)
    res.send(body);
})

// MID
app.use('/css',express.static(__dirname + './../public/css'));
app.use('/js',express.static(__dirname + './../public/js'));

const {auth} = require('./middleware/auth');
app.use(bodyParser.json());
app.use(cookieParser())


/// GET
app.get('/api/movies',(req,res)=>{
    const movie = {
        name:"Fight club",
        gen:"Weird",
        stars:["Brad Pitt","Edward Norton"]
    }
    res.send(movie);
    //res.status(400).send();
})


app.listen(port,()=>{
    console.log(`Started on port ${port}`)
})