function optionm() {
  document.getElementById("size_unit").innerHTML = "meters";
}
function optionkm() {
  document.getElementById("size_unit").innerHTML = "kilometers";
}
function optionmi() {
  document.getElementById("size_unit").innerHTML = "miles";
}
function optionft() {
  document.getElementById("size_unit").innerHTML = "feet";
}
function optionm() {
  document.getElementById("size_unit").innerHTML = "meters";
}
function optionkm() {
  document.getElementById("size_unit").innerHTML = "kilometers";
}
function optionmi() {
  document.getElementById("size_unit").innerHTML = "miles";
}
function optionft() {
  document.getElementById("size_unit").innerHTML = "feet";
}
function optionarcsec() {
  document.getElementById("angle_unit").innerHTML = "arcseconds";
}
function optiondeg() {
  document.getElementById("angle_unit").innerHTML = "degrees";
}

window.onload = function() {
  hide();
};

function calc2() {
  var real_size = Number(document.getElementById("size2").value);
  var ang_size = Number(document.getElementById("ang").value);
  var height_input = Number(document.getElementById("height").value);

  if (height_input > 90) {
    document.getElementById("height").value = 90;
  }

  var size_unit = document.getElementById("size_unit").innerHTML;
  var angle_unit = document.getElementById("angle_unit").innerHTML;

  if (angle_unit == "arcseconds") {
    if (size_unit == "meters") {
      size = real_size * 0.001;
      ang = ang_size / 3600;
      if (height_input == null || height_input == "") {
        calculateForMeters(size, ang, null);
      } else {
        calculateForMeters(size, ang, height_input);
      }
    }
    if (size_unit == "kilometers") {
      size = real_size;
      ang = ang_size / 3600;
      if (height_input == null || height_input == "") {
        calculateForMeters(size, ang, null);
      } else {
        calculateForMeters(size, ang, height_input);
      }
    }
    if (size_unit == "miles") {
      size = real_size;
      ang = ang_size / 3600;
      if (height_input == null || height_input == "") {
        calculateForMiles(size, ang, null);
      } else {
        calculateForMiles(size, ang, height_input);
      }
    }
    if (size_unit == "feet") {
      size = real_size;
      ang = ang_size / 3600;
      if (height_input == null || height_input == "") {
        calculateForFeet(size, ang, null);
      } else {
        calculateForFeet(size, ang, height_input);
      }
    }
  } else if (angle_unit == "degrees") {
    if (size_unit == "meters") {
      size = real_size * 0.001;
      ang = ang_size;
      if (height_input == null || height_input == "") {
        calculateForMeters(size, ang, null);
      } else {
        calculateForMeters(size, ang, height_input);
      }
    }
    if (size_unit == "kilometers") {
      size = real_size;
      ang = ang_size;
      if (height_input == null || height_input == "") {
        calculateForMeters(size, ang, null);
      } else {
        calculateForMeters(size, ang, height_input);
      }
    }
    if (size_unit == "miles") {
      size = real_size;
      ang = ang_size;
      if (height_input == null || height_input == "") {
        calculateForMiles(size, ang, null);
      } else {
        calculateForMiles(size, ang, height_input);
      }
    }
    if (size_unit == "feet") {
      size = real_size;
      ang = ang_size;
      if (height_input == null || height_input == "") {
        calculateForFeet(size, ang, null);
      } else {
        calculateForFeet(size, ang, height_input);
      }
    }
  }
}

function calculateForMeters(size, angle, heightangle) {

  angle = degrees_to_radians(angle);

  var distance = (size / 2) / Math.tan(angle / 2);

  if (!isFinite(distance)) {
    document.getElementById("output_distance").innerHTML = "";
    hide();
  } else {
    document.getElementById("output_distance").innerHTML = "Distance to the object: " + distance.toFixed(4) + " km";
    show();
  }

  if (heightangle != null) {
    var horizonAngle = heightangle;
    var orbitalAltitudeRAW = Math.sin(degrees_to_radians(horizonAngle)) * distance;
    var horizontalDistance = Math.cos(degrees_to_radians(horizonAngle)) * distance;
    var correction = Math.sqrt(horizontalDistance * horizontalDistance + 6378 * 6378) - 6378;
    orbitalAltitudeRAW = orbitalAltitudeRAW + correction;

    if (!isFinite(orbitalAltitudeRAW)) {
      document.getElementById("output_distance").innerHTML = "";
    } else {
      document.getElementById("output_height").innerHTML = "Height of orbit: " + orbitalAltitudeRAW.toFixed(4) + " km";

      var period = 2*Math.PI*Math.sqrt((6378 + orbitalAltitudeRAW) * (6378 + orbitalAltitudeRAW) * (6378 + orbitalAltitudeRAW) * 1000000000 / 398600000000000);
      period = period/60;
      period = period/60;
      document.getElementById("output_period").innerHTML = "Orbital period: " + period.toFixed(4) + " hours"

      period = period * 3600;
      var orbitalVelocity = (2 * Math.PI * (6378 + orbitalAltitudeRAW) / period);
      var angularvelocity = 2 * (Math.atan(degrees_to_radians(orbitalAltitudeRAW/(2 * orbitalVelocity))));
      document.getElementById("output_velocity").innerHTML = "Orbital velocity: " + orbitalVelocity.toFixed(4) + " km/s. Angular velocity: " + angularvelocity.toFixed(4) + " degrees/second";
    }

  } else {
    document.getElementById("output_height").innerHTML = "";
    document.getElementById("output_velocity").innerHTML = "";
    document.getElementById("output_period").innerHTML = "";
  }
}

function calculateForMiles(size, angle, heightangle) {
  angle = degrees_to_radians(angle);

  var distance = (size / 2) / Math.tan(angle / 2);

  if (!isFinite(distance)) {
    document.getElementById("output_distance").innerHTML = "";
    hide();
  } else {
    document.getElementById("output_distance").innerHTML = "Distance to the object: " + distance.toFixed(4) + " mi";
    show();
  }

  if (heightangle != null) {
    var horizonAngle = heightangle;
    var orbitalAltitudeRAW = Math.sin(degrees_to_radians(horizonAngle)) * distance;
    var horizontalDistance = Math.cos(degrees_to_radians(horizonAngle)) * distance;
    var correction = Math.sqrt(horizontalDistance * horizontalDistance + 3963.105 * 3963.105) - 3963.105;
    orbitalAltitudeRAW = orbitalAltitudeRAW + correction;

    if (!isFinite(orbitalAltitudeRAW)) {
      document.getElementById("output_distance").innerHTML = "";
    } else {
      document.getElementById("output_height").innerHTML = "Height of orbit: " + orbitalAltitudeRAW.toFixed(4) + " mi";

      orbitalAltitudeRAW = orbitalAltitudeRAW/0.621371192;

      var period = 2*Math.PI*Math.sqrt((6378 + orbitalAltitudeRAW) * (6378 + orbitalAltitudeRAW) * (6378 + orbitalAltitudeRAW) * 1000000000 / 398600000000000);
      period = period/60;
      period = period/60;
      document.getElementById("output_period").innerHTML = "Orbital period: " + period.toFixed(4) + " hours"

      period = period * 3600;
      var orbitalVelocity = (2 * Math.PI * (6378 + orbitalAltitudeRAW) / period);
      var angularvelocity = 2 * (Math.atan(degrees_to_radians(orbitalAltitudeRAW/(2 * orbitalVelocity))));
      document.getElementById("output_velocity").innerHTML = "Orbital velocity: " + ((orbitalVelocity * 0.621371192) * 3600).toFixed(4) + " mph (" + (orbitalVelocity * 0.621371192).toFixed(4) + " mi/s).\nAngular velocity: " + angularvelocity.toFixed(4) + " degrees/second";
    }

  } else {
    document.getElementById("output_height").innerHTML = "";
    document.getElementById("output_velocity").innerHTML = "";
    document.getElementById("output_period").innerHTML = "";
  }
}

function calculateForFeet(size, angle, heightangle) {

  angle = degrees_to_radians(angle);

  var distance = (size / 2) / Math.tan(angle / 2);

  if (!isFinite(distance)) {
    document.getElementById("output_distance").innerHTML = "";
    hide();
  } else {
    document.getElementById("output_distance").innerHTML = "Distance to the object: " + (distance * 0.000189393939).toFixed(4) + " mi";
    show();
  }

  if (heightangle != null) {
    var horizonAngle = heightangle;
    var orbitalAltitudeRAW = Math.sin(degrees_to_radians(horizonAngle)) * distance;
    var horizontalDistance = Math.cos(degrees_to_radians(horizonAngle)) * distance;
    var correction = Math.sqrt(horizontalDistance * horizontalDistance + 2.0925e+7 * 2.0925e+7) - 2.0925e+7;
    orbitalAltitudeRAW = (orbitalAltitudeRAW + correction) * 0.000189393939;

    if (!isFinite(orbitalAltitudeRAW)) {
      document.getElementById("output_distance").innerHTML = "";
    } else {
      document.getElementById("output_height").innerHTML = "Height of orbit: " + orbitalAltitudeRAW.toFixed(4) + " mi";

      orbitalAltitudeRAW = orbitalAltitudeRAW / 0.621371192;

      var period = 2*Math.PI*Math.sqrt((6378 + orbitalAltitudeRAW) * (6378 + orbitalAltitudeRAW) * (6378 + orbitalAltitudeRAW) * 1000000000 / 398600000000000);
      period = period/60;
      period = period/60;
      document.getElementById("output_period").innerHTML = "Orbital period: " + period.toFixed(4) + " hours"

      period = period * 3600;
      var orbitalVelocity = (2 * Math.PI * (6378 + orbitalAltitudeRAW) / period);
      var angularvelocity = 2 * (Math.atan(degrees_to_radians(orbitalAltitudeRAW/(2 * orbitalVelocity))));
      document.getElementById("output_velocity").innerHTML = "Orbital velocity: " + ((orbitalVelocity * 0.621371192) * 3600).toFixed(4) + " mph (" + (orbitalVelocity * 0.621371192).toFixed(4) + " mi/s).\nAngular velocity: " + angularvelocity.toFixed(4) + " degrees/second";
    }

  } else {
    document.getElementById("output_height").innerHTML = "";
    document.getElementById("output_velocity").innerHTML = "";
    document.getElementById("output_period").innerHTML = "";
  }
}

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi/180);
}

function hide() {
    var x = document.getElementById("output_container");
    x.style.display = "none";
}

function show() {
  var x = document.getElementById("output_container");
  if (x.style.display === "none") {
      x.style.display = "block";
  }
}
