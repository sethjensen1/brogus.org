var activeLink = function() {
  var navLinks = document.getElementsByClassName('navbar-items');

  for (var i = 0; i < navLinks.length; i++){
    var url = navLinks[i].pathname;
    if (url == location.pathname) {
      navLinks[i].classList.add("active");
    }
  }
}

window.onload = activeLink;
