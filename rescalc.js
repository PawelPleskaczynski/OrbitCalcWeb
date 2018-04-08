function calc() {

  var focal_length = Number(document.getElementById("flength").value);
  var pixel_size = Number(document.getElementById("pxsize").value);
  var object_size = Number(document.getElementById("size").value);
  if (object_size == "") {
    var result = 206*pixel_size/focal_length;
    if (isNaN(result)) {
      document.getElementById("output").innerHTML = "";
    } else if (result == 0) {
      document.getElementById("output").innerHTML = "";
    } else {
      document.getElementById("output").innerHTML = result + " arcsecs/px";
    }
  } else {
    var result = 206*pixel_size/focal_length;
    var obj_size = object_size * result;
    if (isNaN(result)) {
      document.getElementById("output").innerHTML = "";
    } else if (result == 0) {
      document.getElementById("output").innerHTML = "";
    } else {
      document.getElementById("output").innerHTML = result + " arcsecs/px. Angular size of the object is " + obj_size + " arcseconds";
    }
  }
}
