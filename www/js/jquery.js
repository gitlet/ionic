$(document).ready(function() {
  $(".top .header-items .side-menu").click(function() {
    $(".top .menu").slideToggle("fast");
  });
  // $(".top .header-items .side-menu").click(function() {
  //   $(".top .menu").effect('slide', { direction: 'left', mode: 'show' }, 500);
  //   $(".top .menu").effect('slide', { direction: 'right', mode: 'hide' }, 500);
  // })

  $(".top .header-items i").click(function() {
    $(".top label").slideToggle();
  });

// displaying corresponding tabs
  $(".bottom .list #green").click(function() {
    $(".view-content #yellow-list").hide();
    $(".view-content #red-list").hide();
    $(".view-content #blue-list").hide();
    $(".view-content #gray-list").hide();
    $(".view-content #green-list").show();

  });

  $(".bottom .list #yellow").click(function() {
    $(".view-content #green-list").hide();
    $(".view-content #red-list").hide();
    $(".view-content #blue-list").hide();
    $(".view-content #gray-list").hide();
    $(".view-content #yellow-list").show();
  });

  $(".bottom .list #red").click(function() {
    $(".view-content #green-list").hide();
    $(".view-content #yellow-list").hide();
    $(".view-content #blue-list").hide();
    $(".view-content #gray-list").hide();
    $(".view-content #red-list").show();
  });

  $(".bottom .list #blue").click(function() {
    $(".view-content #green-list").hide();
    $(".view-content #yellow-list").hide();
    $(".view-content #red-list").hide();
    $(".view-content #gray-list").hide();
    $(".view-content #blue-list").show();
  });

  $(".bottom .list #gray").click(function() {
    $(".view-content #green-list").hide();
    $(".view-content #yellow-list").hide();
    $(".view-content #red-list").hide();
    $(".view-content #blue-list").hide();
    $(".view-content #gray-list").show();
  });


});
