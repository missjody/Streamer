
const db = require("../models")
require("dotenv").config()
const axios = require("axios")

// module.export function for exporting routes to server.js file
module.exports = function (app) {


  // route for search functionality
  app.get("/api/:title", function (req, res) {
    const title = req.params.title
    const queryURL = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
    axios
      .get(queryURL)
      .then(function (data) {
        console.log("/api/title search: ", data);
        res.json(data.data.results)
      })
      .catch(function (err) {
        console.log("Error", err.message)
        res.json(err)
      })
  })

  app.get("/api/profile/:id/all", function (req, res) {
    db.Shows.findAndCountAll({
      // where: {
      //   want_to_watch: true,
      //   watching: false,
      //   completed: false
      // }
    }).then(function (want) {
      res.json(want);
    })
  })

  // app.get for getting all movie information related to a user
  app.get("/api/profile/:id", function (req, res) {
    db.Shows.findAll({
      where: {
        UserId: req.params.id
      },
      include: [db.User]
    }).then(function (result) {
      console.log(result);
      // console.log(result);
      res.json(result);
    });
  });
  // }).then(function (//) {
  // for each in res do a call using api_id for poster image
  // create an array of links for front end to drill into
  // }).then(function (favorites) {

  // loop through favorites and grab movie api_id
  // axios call to grab the poster_path
  // put all poster_paths into an array named posterArray
  // }).then(function (favorites, posterArray) {

  // res.json(favorites, posterArray)
  // });

  // DONT DELETE YET PLEASE //////////////////////////////
  // route for adding movies and shows to our database
  app.post("/api/watchlist", function (req, res) {
    if (req.user) {
    db.Shows.create({
        api_id: req.body.api_id,
        title: req.body.title,
        poster_path: req.body.poster_path,
        media_type: req.body.media_type,
        want_to_watch: req.body.want_to_watch,
        watching: req.body.watching,
        completed: req.body.completed,
        UserId: req.user.id
    }).then(function(data) {
      res.json({message: "success"});
    }).catch(function(e) {
      console.log(e);
    })
  }
  })
  ////////////////////////////////////////////////////////////

};