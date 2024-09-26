let polar = document.getElementById('polar');
console.dir(polar);

function canviaImatge() {
  if(polar.src.match("pol")) {
    polar.src = "imatges/blanc.png";
  } else {
    polar.src = "imatges/polar.png";
  }
}