let express = require('express');
let app =express();
let port = 3333;

//default
app.get('/',(req,res) => {
    res.send('hi from Express');
});

app.listen(port,(err) =>{
    if(err) throw err;
    console.log(`server run on : http://localhost:${port}`);
});
