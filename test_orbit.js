var orbit = require('./orbit');
var assert = require('assert');

var test_date = new Date("April 19, 1990");
var mercuryElements = orbit.computeOrbitalElementsByTime(orbit.mercury, test_date);

assert.equal(mercuryElements.d, 			-3543, 					'd');
assert.equal(mercuryElements.spherical.r, 	0.3748614825201232,    	'r');
assert.equal(mercuryElements.spherical.lon, 170.57086510954474, 	'lon');
assert.equal(mercuryElements.spherical.lat, 5.925527266740476, 		'lat');

assert.equal(mercuryElements.ecliptic.x,  	-0.3678208693993786, 	'x');
assert.equal(mercuryElements.ecliptic.y, 	0.061084529098483234, 	'y');
assert.equal(mercuryElements.ecliptic.z, 	0.038699088054971874, 	'z');

assert.deepEqual(orbit.computeOrbitalElementsByTime(orbit.venus, test_date).spherical,
	{ r: 0.7266069855636131, lon: 263.65703409136654, lat: 359.58203985190556 }, "venus"
);
assert.deepEqual(orbit.computeOrbitalElementsByTime(orbit.mars, test_date).spherical,
	{ r: 1.4171940616350458, lon: 290.6296314823949, lat: 358.3797339388406 }, "mars"
);
assert.deepEqual(orbit.computeOrbitalElementsByTime(orbit.jupiter, test_date).spherical,
	{ r: 5.195078928467503, lon: 105.25433761648246, lat: 0.11132424828177767 }, "jupiter"
);
assert.deepEqual(orbit.computeOrbitalElementsByTime(orbit.saturn, test_date).spherical,
	{ r: 10.061177395824828, lon: 289.45236663884884, lat: 0.17921035672882216 }, "saturn"
);
assert.deepEqual(orbit.computeOrbitalElementsByTime(orbit.uranus, test_date).spherical,
	{ r: 19.396282177303817, lon: 276.79986116847004, lat: 359.6997367329443 }, "uranus"
);
assert.deepEqual(orbit.computeOrbitalElementsByTime(orbit.neptune, test_date).spherical,
	{ r: 30.19285275159162, lon: 282.71909974711394, lat: 0.8575325550199172 }, "neptune"
);