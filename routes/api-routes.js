
const db = require("../models")
require("dotenv").config()
const axios = require("axios")

// module.export function for exporting routes to server.js file
module.exports = function (app) {

  app.get("/api/profile/:id/all", function (req, res) {
    db.Shows.findAndCountAll({

    }).then(function (want) {
      res.json(want);
    })
  })

  app.post("/api/watchlist", function (req, res) {
    if (req.user) {
    db.Shows.findOrCreate({
       where: {
         api_id: req.body.api_id
       },
       defaults: {
        api_id: req.body.api_id,
        media_type: req.body.media_type,
        poster_path: req.body.poster_path,
        want_to_watch: req.body.want_to_watch,
        watching: req.body.watching,
        completed: req.body.completed,
        UserId: req.user.id
       }
    }).then(function(data) {
      res.json({message: "success"});
    }).catch(function(e) {
      console.log(e);
    })

    db.Shows.update({
      want_to_watch: req.body.want_to_watch,
      watching: req.body.watching,
      completed: req.body.completed
      },
      {
        where: {
          api_id: req.body.api_id
        }
      }
    ).then(function(data) {
      res.json({message: "success"});
    }).catch(function(e) {
      console.log(e);
    })
    }
  })


};