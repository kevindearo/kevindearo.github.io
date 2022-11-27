function expandFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("ver-mais");
    var btnText = document.getElementById("aboutBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Ver Mais";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Ver Menos";
      moreText.style.display = "inline";
    }
  }