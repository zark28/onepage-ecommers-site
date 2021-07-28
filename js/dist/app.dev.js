"use strict";

//****** toggle menu ******//
var showMenu = function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

  if (toggleId && navId) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu'); // Active link

var navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  navLink.forEach(function (n) {
    return n.classList.remove('active');
  });
  this.classList.add('active'); // remove menu Mobile

  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach(function (n) {
  return n.addEventListener('click', linkAction);
});