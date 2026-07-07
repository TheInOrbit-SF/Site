document.addEventListener("pointermove",e=>{
  document.documentElement.style.setProperty("--x",e.clientX+"px");
  document.documentElement.style.setProperty("--y",e.clientY+"px");
});
alert("JS LOADED!");
