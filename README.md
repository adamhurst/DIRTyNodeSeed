DIRTyNodeSeed
=============

DIRTy (data intensive real time) AngularJS &amp; NodeJS Application Seed

Application skeleton that suitable for data intensive real time applications. 

It implements RESTful api to a MongoDB, as well as a websocket that streams the output from a simple data file.

=============
servers.js

Simple node express server that serves the '/public/' directory on 'localhost:8080'.

============
REST api

=============
Websocket using Socket.IO

=============
A Gruntfile has been configured to concatenate and minify the frontend and then put it into /public/

To rebuild the front-end and '/public' 
grunt build --force
