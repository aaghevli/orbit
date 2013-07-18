var orbit = require('./orbit');

var bodies = orbit.defaultOrbitalElements();

var mercuryElements = orbit.computeOrbitalElementsByTime(bodies[0], new Date("April 19, 1990"));
console.log(mercuryElements);

assert(-3543, mercuryElements.d, 'd');
assert(0.3748614825201232, mercuryElements.spherical.r,    'r');
assert(2.9770232041366738, mercuryElements.spherical.lon,  'lon');
assert(0.10341996072132158, mercuryElements.spherical.lat, 'lat');

assert(-0.3678208693993786, mercuryElements.ecliptic.x,  'x');
assert(0.061084529098483234, mercuryElements.ecliptic.y, 'y');
assert(0.038699088054971874, mercuryElements.ecliptic.z, 'z');

function assert(expected, actual, message) {
	if (actual != expected) {
	    console.error(message+'[expected: '+expected+', was: '+actual+']');
	}
}