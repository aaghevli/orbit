Orbit
=====

Computing planetary positions solely based on the tutorials on the following site:

http://www.stjarnhimlen.se/comp/ppcomp.html

Usage
=====

Node.js

// Compute mercury's orbital elements by time
var orbit = require('orbit');

var mercury = orbit.mercury; 			// pre-defined element in the API
var time = new Date("April 19, 1990"); 	// time to compute positions for
var mercuryElements = orbit.computeOrbitalElementsByTime(mercury, time);

Produces:

{ date: Thu Apr 19 1990 00:00:00 GMT-0700 (PDT),
  d: -3543,
  orbitalElements: 
   { N: 48.2162988259,
     i: 7.00452285,
     w: 29.088158390799997,
     a: 0.387098,
     e: 0.205633019463,
     M: 69.51529041759932 },
  E: 81.15715124786009,
  ecliptic: 
   { x: -0.3678208693993786,
     y: 0.061084529098483234,
     z: 0.038699088054971874 },
  spherical: 
   { r: 0.3748614825201232,
     lon: 170.57086510954474,
     lat: 5.925527266740476 } } }