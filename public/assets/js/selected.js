$(document).ready(function () {


  $(".add-watchlist").click(function (event) {
    event.preventDefault();
    console.log("something happened")
    ///define data based on what is on the page
   
    
    let dataPass = {
      api_id: $(this).data("id"),
      poster_path: $(this).data("poster"),
      UserId: localStorage.getItem("user-id")
    };
    console.log("add " + JSON.stringify(dataPass))
    $.post("/api/watchlist", {
      api_id: dataPass.api_id,
      // title: dataPass.title,
      // media_type: dataPass.media_type,
      poster_path: dataPass.poster_path,
      want_to_watch: true,
      watching: false,
      completed: false,
      UserId: dataPass.UserId
    }).then(function(data) {
      console.log("is this thing on?");
      if(data.message === "success") {
        alert("Added to your watchlist!");
      }
    }).catch(function(e) {
      console.log(e);
    })
     
  });

  $(".mark-start").click(function (event) {
    event.preventDefault();
    console.log("something happened")
    ///define data based on what is on the page
    let dataPass = {
      api_id: $(this).data("id"),
      poster_path: $(this).data("poster"),
      UserId: localStorage.getItem("user-id")
    };
    console.log("add " + JSON.stringify(dataPass))
    $.post("/api/watchlist", {
      api_id: dataPass.api_id,
      // title: dataPass.title,
      // media_type: dataPass.media_type,
      poster_path: dataPass.poster_path,
      want_to_watch: false,
      watching: true,
      completed: false,
      UserId: dataPass.UserId
    }).then(function(data) {
      console.log("is this thing on?");
      if(data.message === "success") {
        alert("This title is now on your watching list");
      }
    }).catch(function(e) {
      console.log(e);
    })
     
  });

  $(".mark-complete").click(function (event) {
    event.preventDefault();
    console.log("something happened")
    ///define data based on what is on the page
    let dataPass = {
      api_id: $(this).data("id"),
      poster_path: $(this).data("poster"),
      UserId: localStorage.getItem("user-id")
    };
    console.log("add " + JSON.stringify(dataPass))
    $.post("/api/watchlist", {
      api_id: dataPass.api_id,
      // title: dataPass.title,
      // media_type: dataPass.media_type,
      poster_path: dataPass.poster_path,
      want_to_watch: false,
      watching: false,
      completed: true,
      UserId: dataPass.UserId
    }).then(function(data) {
      console.log("is this thing on?");
      if(data.message === "success") {
        alert("This title has been completed!");
      }
    }).catch(function(e) {
      console.log(e);
    })
     
  });


});