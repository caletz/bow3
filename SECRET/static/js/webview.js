// Generated by CoffeeScript 1.6.3
var clean;

clean = function() {
  var footer;
  if (/clean/.test(window.location.search)) {
    footer = document.getElementById('footer');
    footer.style.display = 'None';
    header = document.getElementById('header');
    header.style.display = 'None';
  }
};

clean();

$(document).ready(function () {



    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 780
        }, 620);
        return false;
    });

});