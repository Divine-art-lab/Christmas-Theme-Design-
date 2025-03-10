function toogleMenu() {
  let nav = document.getElementById("navs");
  let icon = document.getElementById("bars");
  if (nav && icon) {
    if (nav.style.top === "-100%") {
      nav.style.top = "0";
      icon.className = "fa fa-times icon";
    } else {
      nav.style.top = "-100%";
      icon.className = "fa fa-bars icon";
    }
    }
  } 