//*****************************************************************************
//
// Library based on http://www.stjarnhimlen.se/comp/ppcomp.html
//
// The primary orbital elements are here denoted as:
//     N = longitude of the ascending node
//     i = inclination to the ecliptic (plane of the Earth's orbit)
//     w = argument of perihelion
//     a = semi-major axis, or mean distance from Sun
//     e = eccentricity (0=circle, 0-1=ellipse, 1=parabola)
//     M = mean anomaly (0 at perihelion; increases uniformly with time)
//
// Related orbital elements are:
//     w1 = N + w   = longitude of perihelion
//     L  = M + w1  = mean longitude
//     q  = a*(1-e) = perihelion distance
//     Q  = a*(1+e) = aphelion distance
//     P  = a ^ 1.5 = orbital period (years if a is in AU, astronomical units)
//     T  = Epoch_of_M - (M(deg)/360_deg) / P  = time of perihelion
//     v  = true anomaly (angle between position and perihelion)
//     E  = eccentric anomaly
//*****************************************************************************
(function(exports){

	var mercury = mercury || {name: "Mercury"};
	mercury.getOrbitalElements = function(d) {
		return {
			N:  48.3313 + 3.24587E-5   * d,
			i:   7.0047 + 5.00E-8      * d,
			w:  29.1241 + 1.01444E-5   * d,
	    a: 0.387098,
	    e: 0.205635 + 5.59E-10     * d,
	    M: 168.6562 + 4.0923344368 * d
		};
	};
	exports.mercury = mercury;

	var venus = venus || {name: "Venus"};
	venus.getOrbitalElements = function(d) {
		return {
			N:  76.6799 + 2.46590E-5   * d,
	    i:   3.3946 + 2.75E-8      * d,
	    w:  54.8910 + 1.38374E-5   * d,
	    a: 0.723330,
	    e: 0.006773 - 1.302E-9     * d,
	    M:  48.0052 + 1.6021302244 * d
		};
	};
	exports.venus = venus;

	var earth = earth || {name:"Earth"};
	earth.getOrbitalElements = function(d) {
		return {
			N: 0.0,
	    i: 0.0,
	    w: 282.9404 + 4.70935E-5 * d + 180,
	    a: 1.000000,
	    e: 0.016709 - 1.151E-9 * d,
	    M: 356.0470 + 0.9856002585 * d
		};
	}
	exports.earth = earth;

	var mars = mars || {name: "Mars"};
	mars.getOrbitalElements = function(d) {
		return {
	    N:  49.5574 + 2.11081E-5   * d,
	    i:   1.8497 - 1.78E-8      * d,
	    w: 286.5016 + 2.92961E-5   * d,
	    a: 1.523688,
	    e: 0.093405 + 2.516E-9     * d,
	    M:  18.6021 + 0.5240207766 * d
		};
	};
	exports.mars = mars;

	var jupiter = jupiter || {name: "Jupiter"};
	jupiter.getOrbitalElements = function(d) {
		return {
			N: 100.4542 + 2.76854E-5   * d,
	    i:   1.3030 - 1.557E-7     * d,
	    w: 273.8777 + 1.64505E-5   * d,
	    a: 5.20256,
	    e: 0.048498 + 4.469E-9     * d,
	    M:  19.8950 + 0.0830853001 * d
		};
	};
	exports.jupiter = jupiter;

	var saturn = saturn || {name: "Saturn"};
	saturn.getOrbitalElements = function(d) {
		return {
			N: 113.6634 + 2.38980E-5   * d,
	    i:   2.4886 - 1.081E-7     * d,
	    w: 339.3939 + 2.97661E-5   * d,
	    a: 9.55475,
	    e: 0.055546 - 9.499E-9     * d,
	    M: 316.9670 + 0.0334442282 * d,
		};
	};
	exports.saturn = saturn;

	var uranus = uranus || {name: "Uranus"};
	uranus.getOrbitalElements = function(d) {
		return {
			N:  74.0005 + 1.3978E-5    * d,
	    i:   0.7733 + 1.9E-8       * d,
	    w:  96.6612 + 3.0565E-5    * d,
	    a: 19.18171 - 1.55E-8      * d,
	    e: 0.047318 + 7.45E-9      * d,
	    M: 142.5905 + 0.011725806  * d
		};
	};
	exports.uranus = uranus;

	var neptune = neptune || {name: "Neptune"};
	neptune.getOrbitalElements = function(d) {
		return {
			N: 131.6737,
			i:   1.7700 - 2.55E-7      * d,
	    w: 272.8461 - 6.027E-6     * d,
	    a: 30.05826 + 3.313E-8     * d,
	    e: 0.008606 + 2.15E-9      * d,
	    M: 260.2471 + 0.005995147  * d
		};
	};
	exports.neptune = neptune;

  var defaultOrbitalElements = function() {
		return [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
	}
	exports.defaultOrbitalElements = defaultOrbitalElements;

	//************************************************************************
	// Returns the ecliptic x, y and z for the date given.
	//
	// Example output:
	//
	// { date: Thu Apr 19 1990 00:00:00 GMT-0700 (PDT),
	//   d: -3543,
	//   orbitalElements:
	//    { N: 48.2162988259,
	//      i: 7.00452285,
	//      w: 29.088158390799997,
	//      a: 0.387098,
	//      e: 0.205633019463,
	//      M: 69.51529041759932 },
	//   E: 81.15715124786009,
	//   ecliptic:
	//    { x: -0.3678208693993786,
	//      y: 0.061084529098483234,
	//      z: 0.038699088054971874 },
	//   spherical:
	//    { r: 0.3748614825201232,
	//      lon: 2.9770232041366738,
	//      lat: 0.10341996072132158 } }
	//
	//************************************************************************
	var computeOrbitalElementsByTime = function(body, date) {
		var d = toDateNumber(date);

		var orbitalElements = body.getOrbitalElements(d);
		var N = orbitalElements.N;   // (Long asc. node)
		var i = orbitalElements.i;   // (Inclination)
		var w = orbitalElements.w;   // (Arg. of perigee)
		var a = orbitalElements.a;   // (Mean distance)
		var e = orbitalElements.e;   // (Eccentricity)
		var M = orbitalElements.M;   // (Mean anomaly)

		// Normalize angles
		N = rev(N);
		i = rev(i);
		w = rev(w);
		M = rev(M);

		// Compute the eccentric anomaly E from the mean anomaly M and from the eccentricity e (E and M in degrees):
		var E = M + (180/Math.PI) * e * Math.sin(toRadians(M)) * (1.0 + e * Math.cos(toRadians(M)));
		var error = 1;
		while (error > 0.005) {
			var E1 = E - (E - (180/Math.PI) * e * Math.sin(toRadians(E)) - M) / (1 - e * Math.cos(toRadians(E)));
			error = Math.abs(E - E1);
			E = E1;
		}

		// Then compute the Body's distance r and its true anomaly v from:
		var x = a * (Math.cos(toRadians(E)) - e);
		var y = a * (Math.sqrt(1.0 - e*e) * Math.sin(toRadians(E)));
		// console.log('x='+x);
		// console.log('y='+y);

		// Then we convert this to distance and true anonaly:
		var r = Math.sqrt(x*x + y*y);
		var v = toDegrees(Math.atan2(y, x));

		var n_rad = toRadians(N);
		var xw_rad = toRadians(v+w);
		var i_rad = toRadians(i);
		// Now we know the Moon's position in the plane of the lunar orbit. To compute the Moon's position in ecliptic coordinates, we apply these formulae:
		var xeclip = r * ( Math.cos(n_rad) * Math.cos(xw_rad) - Math.sin(n_rad) * Math.sin(xw_rad) * Math.cos(i_rad) );
		var yeclip = r * ( Math.sin(n_rad) * Math.cos(xw_rad) + Math.cos(n_rad) * Math.sin(xw_rad) * Math.cos(i_rad) );
		var zeclip = r * Math.sin(xw_rad) * Math.sin(i_rad);

		var RA   = toDegrees(Math.atan2(yeclip, xeclip));
    var Decl = toDegrees(Math.asin(zeclip/r));

		return {
			name: body.name,
			date: date,
			d: d,
			orbitalElements: {
				N: N,
				i: i,
				w: w,
				a: a,
				e: e,
				M: M
			},
			E: E,
			ecliptic: {
				x: xeclip,
				y: yeclip,
				z: zeclip
			},
			spherical: {
				r: r,
				lon: RA,
				lat: Decl
			}
		};
	}
	exports.computeOrbitalElementsByTime = computeOrbitalElementsByTime;

	//************************************************************************
	// Returns the ecliptic positions between two dates and a specific
	// resolution.
	//************************************************************************
	var computeCelestialElementsByTimeRange = function(body, startDate, endDate, increment_days) {
		var time = startDate;
		var index = 0;
		var data = [];
		while (time < endDate) {
			var ecliptic = computeOrbitalElementsByTime(body, time);
			ecliptic.date = new Date(time);
			time.setDate(time.getDate() + increment_days);
			data.push(ecliptic);
		}
		return data;
	}
	exports.computeCelestialElementsByTimeRange = computeCelestialElementsByTimeRange;

	function rev(x) {
		var rv = x - Math.round(x/360.0)*360.0;
  	if (rv < 0.0) {
    	rv = rv + 360.0;
  	}
  	return rv;
	}

	function toRadians(deg) {
		return Math.PI * deg / 180.0;
	}

	function toDegrees(rad) {
		return rev(180.0 * rad / Math.PI);
	}

	function toDateNumber(date) {
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		var D = date.getDate();
		return Math.round(367*y - 7 * ( y + (m+9)/12 ) / 4 + 275*m/9 + D - 730530);
	}

	var printPositions = function(body, startDate, endDate, increment_days) {
		var data = computeEclipticPositions(body, startDate, endDate, increment_days);
		console.log('************************************');
		console.log('* ' + data.name);
		console.log('************************************');
		console.log('date,x,y,z');
		for (var i=0; i<data.length; i++) {
			var row = data[i];
			var output = row.date.toISOString()+', '+row.ecliptic.x+', '+row.ecliptic.y+', '+row.ecliptic.z;
			console.log(output);
		}
	}

})(typeof exports === 'undefined'? this['orbit']={}: exports);
