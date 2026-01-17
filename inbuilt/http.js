let http = require( 'http' );

//req > what we send to server(params, queryParams,body)
//res > what server sends in return

let server = http.createServer((req,res)=>
{
    res.write('<h1> This is Node js code </h1>');
    res.end;

});

server.listen(3333,()=>{
    console.log('server run on - http://localhost:3333');
})