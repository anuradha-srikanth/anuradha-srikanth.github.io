
  $(document)
  .ready(function() {

      // fix menu when passed
      $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade out');
        }
      })
      ;

      // create sidebar and attach to menu open
      $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
      ;
      // show modal
      $('.ui.fullscreen.modal')
      .modal({ blurring: true })
      .modal('setting', 'transition', 'horizontal flip')
      .modal('attach events', '.content.icon.menu','show')
      ;

      // $(".case")


    })
  ;


  /* Open when someone clicks on the span element */
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

