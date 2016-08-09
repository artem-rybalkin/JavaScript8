  $(document).ready(function() {
  	// console.log('hello');
    $( "em" ).hide();
    $( "input" ).hover(function(){
      $(this).next("em").animate({opacity: "show", top: "-75"}, "slow");
    }, function() {
        $(this).next("em").animate({opacity: "hide", top: "-85"}, "fast");
    });
    
    $( "button" ).click(function(){
      $( "em" ).show();
    });
  });

