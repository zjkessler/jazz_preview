var express = require( 'express' );
var app = express();
var path = require( 'path' );
var port = process.env.PORT || 8080;


app.use( express.static( path.join( __dirname, "app" ) ) );

app.listen(port, function(){
    console.log( "Server is listening on port: " + port );
} );
