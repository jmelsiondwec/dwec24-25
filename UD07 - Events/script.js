window.addEventListener('click', (e)=>{
  let punto = document.createElement("div");
  punto.className = "dot";
  punto.style.left = (e.pageX - 4) + "px";
  punto.style.top = (e.pageY - 4) + "px";
  document.body.appendChild(punto);
});
