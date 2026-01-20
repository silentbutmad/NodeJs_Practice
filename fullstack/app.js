let express = require('express');
let fs = require('fs');
let app =express();
let port = 3333;
let morgan = require('morgan');

// log / middleware
app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}));

// html file path
app.set('views','./src/views');

// view engine
app.set('view engine','ejs');

//default
app.get('/',(req,res) => {
    //res.send('hi from Express');
    //res.render('index');
    res.render('index',{name:'Mohit'})
});

app.get('/post',(req,res) =>
{
    res.send("hi ");
    res.end();
})



app.listen(port,(err) =>{
    if(err) throw err;
    console.log(`server run on : http://localhost:${port}`);
});
