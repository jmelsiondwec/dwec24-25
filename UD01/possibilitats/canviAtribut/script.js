let polar = document.getElementById('polar');

function canviaImatge() {
  if(polar.src.match("pol")) {
    polar.src = "imatges/blanc.png";
  } else {
    polar.src = "imatges/polar.png";
  }
}