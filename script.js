let toggleNavStatus = false;

let toggleNav = function () {
  if (toggleNavStatus === false) {
    document.getElementById("menu").style.transform = "translateX(564px)";
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    document.getElementById("menu").style.transform = "translateX(-564px)";
    toggleNavStatus = false;
  }
};

let changeGrey = function () {
  document.body.style.backgroundColor = "grey";
  document.getElementById("menu").style.transform = "translateX(-564px)";
  toggleNavStatus = false;
};

let changeRed = function () {
  document.body.style.backgroundColor = "red";
  document.getElementById("menu").style.transform = "translateX(-564px)";
  toggleNavStatus = false;
};

let changeOrange = function () {
  document.body.style.backgroundColor = "orange";
  document.getElementById("menu").style.transform = "translateX(-564px)";
  toggleNavStatus = false;
};

let changePurple = function () {
  document.body.style.backgroundColor = "purple";
  document.getElementById("menu").style.transform = "translateX(-564px)";
  toggleNavStatus = false;
};

let changeGreen = function () {
  document.body.style.backgroundColor = "green";
  document.getElementById("menu").style.transform = "translateX(-564px)";
  toggleNavStatus = false;
};
