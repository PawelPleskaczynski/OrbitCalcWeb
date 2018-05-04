function calc() {
  var focal_length = Number(document.getElementById("flength").value);
  var pixel_size = Number(document.getElementById("pxsize").value);
  var object_size = Number(document.getElementById("size").value);
  if (object_size == "") {
    var result = 206*pixel_size/focal_length;
    result = result.toFixed(2);
    if (isNaN(result)) {
      document.getElementById("output").innerHTML = "";
      jQuery("#outtext").hide();
    } else if (result == 0) {
      document.getElementById("output").innerHTML = "";
      jQuery("#outtext").hide();
    } else {
      document.getElementById("output").innerHTML = result + " arcsecs/px";
      jQuery("#outtext").show();
    }
  } else {
    var result = 206*pixel_size/focal_length;
    result = result.toFixed(2);
    var obj_size = object_size * result;
    obj_size = obj_size.toFixed(2);
    if (isNaN(result)) {
      document.getElementById("output").innerHTML = "";
    } else if (result == 0) {
      document.getElementById("output").innerHTML = "";
    } else {
      document.getElementById("output").innerHTML = result + " arcsecs/px. Angular size of the object is " + obj_size + " arcseconds";
      document.getElementById("ang").value = obj_size;
      jQuery("#outtext").show();
    }
  }
}
