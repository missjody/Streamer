
$(document).ready(function () {
  
    const generateOwl = function () {
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

  $(".carouselImage").on("click", function (event) {
    event.preventDefault();

    // console.log("this", this)
    //   let movie = $(this).data("movie");
      // console.log("this movie ", movie);
      // console.log("this tv ", $(this).data("tv"));


    let id = $(this).data("id");


    let type = $(this).data("movie") === undefined ? "tv" : "movie";
    // to be injected to the api address later

    moveToSelected(type, id);
  });

  const moveToSelected = function (type, id) {

    window.location.pathname = `/selected/${type}/${id}`;
  };


  };

  const callCount = function () {
    $.get("/api/profile/:id/all", function (all) {
      // console.log(all.rows, "ALL");
      let sortMe = all.rows;
      let wantNum = 0;
      let watchNum = 0;
      let completedNum = 0;

      // loop through all.rows
      for (i = 0; i < sortMe.length; i++) {
        // if want_to_watch is true
        if (sortMe[i].want_to_watch === true) {
          // wantNum++
          wantNum++;
          // else if watching is true
        } else if (sortMe[i].watching === true) {
          // watchNum++
          watchNum++;
          // else
        } else {
          // completedNum++
          completedNum++;
        }
      }

      generateChart(wantNum, watchNum, completedNum);
    });
  };


  // this code generates a chart on the screen. we can add an additional
  // data set of some other information on to the same
  // radar later down the road if we would like to

  const generateChart = (wantNum, watchNum, completedNum) => {
    console.log(wantNum, "Passing to chart?")
    var ctx = document.getElementById("activity-chart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Will Watch', 'Currently Watching', 'Finished'],
        datasets: [{
          label: 'What you are up to?',
          data: [wantNum, watchNum, completedNum],
          backgroundColor: [
            'rgba(218, 103, 74, 1)',
            'rgba(255,220,124,1)',
            'rgba(255,170,103,1)',
          ]
          // borderColor: 'rgba(218, 103, 74, 1)',
          // borderWidth: 1
        }]
      },
      responsive: true,
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });

  }



  callCount();
  generateOwl();

});