let fs = require( 'fs' );

// fs.writeFile('file.txt',' contains of file ',()=>
// {
//     console.log('done');
// });

fs.readFile('file.txt','utf-8',(err,data)=>
{
    if(err)
    {
        throw err;
    }
    console.log(data);
});
fs.readFile('file1.txt','utf-8',(err,data)=>
{
    if(err)
    {
        throw err;
    }
    console.log(data);
});
