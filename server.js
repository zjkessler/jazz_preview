var express = require( 'express' );
var app = express();
var mongoose = require( 'mongoose' );
var path = require( 'path' );


app.use( express.static( path.join( __dirname, "app" ) ) );
