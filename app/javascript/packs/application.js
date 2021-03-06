/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('Hello World from Webpacker')


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  var navbrand = $(".nav-logo")
  var navlinks = $(".nav-link")
  var navbutton = $("#nav-button")

  var pathname = window.location.pathname;
  console.log(pathname)
  if (pathname != "/") {
    console.log("in condition")
    navbrand.css("color", "#1B326C")
    navlinks.addClass("alt-navlink");
    navbutton.addClass("alt-button")
  } else {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var viewHeight = window.innerHeight
      if (scroll >= (viewHeight - 40)) {
        navbrand.css("color", "#1B326C")
        navlinks.addClass("alt-navlink");
        navbutton.addClass("alt-button")
      }
      else {
        navbrand.css("color", "white")
        navlinks.removeClass("alt-navlink")
        navbutton.removeClass("alt-button")
      }
    })

  }
});



$(document).ready(function () {

})