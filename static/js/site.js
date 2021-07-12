navButton = document.getElementById('nav-button');
mobileNav = document.getElementById('mobile-nav');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('open');
  mobileNav.classList.toggle('open');
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var randomLinks = function() {
  // This is where it all goes :)
  var navLinks = document.getElementsByClassName('navbar-items');

  //naturally you could use something other than the <nav> element
  for (var i = 0; i < navLinks.length; i++){
    var url = navLinks[i].pathname;
    if (url == location.pathname) {
      navLinks[i].classList.add("active");
      navLinks[i].classList.add("space" + getRandomInt(0, 7));
    }
  }
}

window.onload = randomLinks;
