
$( document ).ready(function() {
  var $head = $( '#header' );
  $( '.ha-waypoint' ).each( function(i) {
    var $el = $( this ),
      animClassDown = $el.data( 'animateDown' ),
      animClassUp = $el.data( 'animateUp' );

    $el.waypoint( function( direction ) {
      if( direction === 'down' && animClassDown ) {
        $head.attr('class', 'header ' + animClassDown);
      }
      else if( direction === 'up' && animClassUp ){
        $head.attr('class', 'header ' + animClassUp);
      }
    });
    var pathname = window.location.pathname; 
    if ( pathname == "/") {
      $("body").addClass("home");
    }


    console.log("hello?");
  });


  $("#js-open-m-nav").on("click", function() {
      $("#js-open-m-nav").removeClass("active");
      $(".nav-links").addClass("open-m-nav");
      $("#js-close-m-nav").addClass("active");
      $(".m-header").addClass("active");
  });

  $("#js-close-m-nav").on("click", function() {
      $(".nav-links").removeClass("open-m-nav");
      $("#js-open-m-nav").addClass("active");
      $("#js-close-m-nav").removeClass("active");
      $(".m-header").removeClass("active");
  });


});