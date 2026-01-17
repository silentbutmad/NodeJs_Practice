let fs = require( 'fs' );

fs.writeFile('file.txt',' contains of file ',()=>
{
    console.log('done');
});

