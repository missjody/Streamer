$(document).ready(function () {

  const generateOwl = function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        },
      }
    });

  };

  generateOwl();

  //on click for heading over to selected page
  $(".carouselImage").on("click", function (event) {
    event.preventDefault();

    console.log("this", this)
    
    // let type = $(this).data("movie") === undefined ? "tv" : "movie";
    // to be injected to the api address later
    let type = $(this).data("type")

    let id = $(this).data("id");



    moveToSelected(type, id);
  });

  const moveToSelected = function(type, id) {

    window.location.pathname = `/selected/${type}/${id}`;
  };

  // click event for search functionality
  $(".searchform").on("submit", function (event) {
    event.preventDefault();
    console.log("do we get this far in search");

    var title = $("#search").val().trim();
    title = title.replace(/\s+/g, "%20");

    if (title) {
      
      window.location.pathname = `/selected/${title}`;
    } else {
      var mblSearch = $("#search2").val().trim();
      mblSearch = mblSearch.replace(/\s+/g, "%20");
      console.log(mblSearch);
      window.location.pathname = `/selected/${mblSearch}`;
      console.log("/api/" + mblSearch)
    }


  });
});

