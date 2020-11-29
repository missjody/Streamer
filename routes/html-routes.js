/* eslint-disable quotes */
var isAuthenticated = require("../config/middleware/isAuthenticated")
const db = require("../models")
require("dotenv").config()
const axios = require("axios")

module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // route for login or sign up page
  // isAuthenticated
  app.get("/", function (req, res) {
    // if (req.user) {
    //   console.log("if logged in go to profile")
    //   res.render("profile")
    // }
    // console.log("if not logged in go to index")
    let hardcodeTV = [
      {
        "name": "The Simpsons",
        "api_id": 456,
        "vote_average": 7.2,
        "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
        "poster_path": "/qcr9bBY6MVeLzriKCmJOv1562uY.jpg"
      },
      {
        "name": "Star Wars: The Clone Wars",
        "api_id": 4194,
        "vote_average": 7.8,
        "overview": "Yoda, Obi-Wan Kenobi, Anakin Skywalker, Mace Windu and other Jedi Knights lead the Grand Army of the Republic against the droid army of the Separatists.",
        "poster_path": "/p6s2svEHHLsQ1TOw4Si54c1dD5L.jpg"
      },
      {
        "name": "The Flash",
        "api_id": 60735,
        "vote_average": 6.8,
        "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
        "poster_path": "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
      },
      {
        "name": "The Walking Dead",
        "api_id": 1402,
        "vote_average": 7.3,
        "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
        "poster_path": "/5l10EjdgPxu8Gbl5Ww6SWkVQH6T.jpg"
      },
      {
        "name": "Law & Order: Special Victims Unit",
        "api_id": 2734,
        "vote_average": 6.6,
        "overview": "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
        "poster_path": "/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg"
      },
      {
        "name": "Better Call Saul",
        "api_id": 60059,
        "vote_average": 8.1,
        "overview": "Six years before Saul Goodman meets Walter White. We meet him when the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet. Working alongside, and, often, against Jimmy, is “fixer” Mike Ehrmantraut. The series tracks Jimmy’s transformation into Saul Goodman, the man who puts “criminal” in “criminal lawyer\".",
        "poster_path": "/cU0kAjGjA6d2XjBzJMUIEVKiGDb.jpg"
      },
      {
        "name": "Doctor Who",
        "api_id": 57243,
        "vote_average": 7,
        "overview": "The Doctor is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel. The Doctor saves planets for a living—more of a hobby actually, and the Doctor's very, very good at it.",
        "poster_path": "/cDDb7WA2i7cENhkEEjXEDrXGyNL.jpg"
      },
      {
        "name": "Grey's Anatomy",
        "api_id": 1416,
        "vote_average": 6.6,
        "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
        "poster_path": "/jnsvc7gCKocXnrTXF6p03cICTWb.jpg"
      },
      {
        "name": "Outlander",
        "api_id": 56570,
        "vote_average": 7.4,
        "overview": "The story of Claire Randall, a married combat nurse from 1945 who is mysteriously swept back in time to 1743, where she is immediately thrown into an unknown world where her life is threatened. When she is forced to marry Jamie, a chivalrous and romantic young Scottish warrior, a passionate affair is ignited that tears Claire's heart between two vastly different men in two irreconcilable lives.",
        "poster_path": "/70PRIpG1phOyphejeLwi0K8zdJo.jpg"
      },
      {
        "name": "Star Trek: Picard",
        "api_id": 85949,
        "vote_average": 7.6,
        "overview": "Set twenty years after the events of Star Trek Nemesis, we follow the now-retired Admiral Picard into the next chapter of his life.",
        "poster_path": "/nIlAKIrLKxOeoEnc0Urb65yNCp.jpg"
      },
      {
        "name": "Riverdale",
        "api_id": 69050,
        "vote_average": 7.5,
        "overview": "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
        "poster_path": "/4X7o1ssOEvp4BFLim1AZmPNcYbU.jpg"
      },
      {
        "name": "Hawaii Five-0",
        "api_id": 32798,
        "vote_average": 6.8,
        "overview": "Steve McGarrett returns home to Oahu, in order to find his father's killer. The governor offers him the chance to run his own task force (Five-0). Steve's team is joined by Chin Ho Kelly, Danny \"Danno\" Williams, and Kono Kalakaua.",
        "poster_path": "/sIdCKlmM2nU4akIvFQaAIiU8YES.jpg"
      },
      {
        "name": "Homeland",
        "api_id": 1407,
        "vote_average": 7.4,
        "overview": "CIA officer Carrie Mathison is tops in her field despite being bipolar, which makes her volatile and unpredictable. With the help of her long-time mentor Saul Berenson, Carrie fearlessly risks everything, including her personal well-being and even sanity, at every turn.",
        "poster_path": "/6GAvS2e6VIRsms9FpVt33PsCoEW.jpg"
      },
      {
        "name": "Brooklyn Nine-Nine",
        "api_id": 48891,
        "vote_average": 7.8,
        "overview": "A single-camera ensemble comedy following the lives of an eclectic group of detectives in a New York precinct, including one slacker who is forced to shape up when he gets a new boss.",
        "poster_path": "/dzj0oLZWe3qMgK4jlgdKWPVxxIx.jpg"
      },
      {
        "name": "The Outsider",
        "api_id": 84661,
        "vote_average": 8.4,
        "overview": "When an insidious supernatural force edges its way into a seemingly straightforward investigation into the gruesome murder of a young boy, it leads a seasoned cop and an unorthodox investigator to question everything they believe in.",
        "poster_path": "/aMiPwPQjQI1EZN3xP2V0sSU37dc.jpg"
      },
      {
        "name": "Chicago Fire",
        "api_id": 44006,
        "vote_average": 7.6,
        "overview": "An edge-of-your-seat view into the lives of everyday heroes committed to one of America's noblest professions. For the firefighters, rescue squad and paramedics of Chicago Firehouse 51, no occupation is more stressful or dangerous, yet so rewarding and exhilarating. These courageous men and women are among the elite who forge headfirst into danger when everyone else is running the other way and whose actions make the difference between life and death.",
        "poster_path": "/g9aoiYLbE3IrDiMms5fU4lv6BR4.jpg"
      }
    ];

    let hardcodeMovies = [
      {
        "poster_path": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
        "id": 577922,
        "title": "Tenet",
        "vote_average": 7.5,
        "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      },
      {
        "poster_path": "/8QKWOuEZk77ey7oA1Ul3e3xm4KY.jpg",
        "id": 654028,
        "title": "The Christmas Chronicles: Part Two",
        "vote_average": 7.6,
        "overview": "Kate Pierce is reluctantly spending Christmas with her mom’s new boyfriend and his son Jack. But when the North Pole and Christmas are threatened to be destroyed, Kate and Jack are unexpectedly pulled into a new adventure with Santa Claus.",
      },
      {
        "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "id": 496243,
        "title": "Parasite",
        "vote_average": 8.6,
        "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      },
      {
        "poster_path": "/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
        "id": 129,
        "title": "Spirited Away",
        "vote_average": 8.5,
        "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
      },
      {
        "poster_path": "/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
        "id": 497,
        "title": "The Green Mile",
        "vote_average": 8.5,
        "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      },
      {
        "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "id": 680,
        "title": "Pulp Fiction",
        "vote_average": 8.5,
        "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      },
      {
        "poster_path": "/pKKvCaL1TPTVtbI6EeliyND3api.jpg",
        "id": 155,
        "title": "The Dark Knight",
        "vote_average": 8.4,
        "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      },
      {
        "poster_path": "/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg",
        "id": 539,
        "title": "Psycho",
        "vote_average": 8.4,
        "overview": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
      }
    ];

    let indexObject = {
      movies: hardcodeMovies,
      tv: hardcodeTV
    };

    res.render("index", indexObject)
  });





  // isAuthenticated, ADD ID HERE
  app.get("/profile/:id", isAuthenticated, function (req, res) {
    if (req.user) {
      db.Shows.findAll({
        where: {
          UserId: req.user.id
        }
      }).then(function (shows) {
        db.User.findAll({
            where: {
                id: req.user.id
            }
        }).then(function(user) {
            // window.localStorage.setItem("UserId", req.user.id);
            // console.log("user", user[0].dataValues);
            let username = user[0].dataValues.username;
            let want_to_watch= [];
            let watching = [];
            let completed = [];
            for (let i = 0; i < shows.length; i++) {
              let show = shows[i].dataValues;
              let title = show.title;
              title = title.replace(/\s+/g, '%20');
              // console.log("title",title)
              show.title = title;
    
              if (show.want_to_watch && !show.watching && !show.completed) {
                want_to_watch.push(show);
                // console.log("want to watch", want_to_watch);
              } else if (!show.want_to_watch && show.watching && !show.completed) {
                watching.push(show);
                // console.log("watching",watching);
              } else if (!show.want_to_watch && !show.watching && show.completed) {
                completed.push(show);
                // console.log("completed", completed);
              }
            }
            res.render("profile", { username, want_to_watch, watching, completed });
        }).catch(function(e) {
          console.log(e);
        })
      }).catch(function(e) {
        console.log(e);
      })
    } else {
      res.render("login");
    }
  });

  // DONT DELETE YET PLEASE//////////////////////////////
  // Selected Movie / TV Page:
  // on click for search redirects to selected with movie title
  // app.get("/selected/:title", isAuthenticated, function (req, res) {
  //   if (req.user) {
  //     res.render("selected");
  //   } else {
  //     res.render("index");
  //   }
  // });

  app.get("/selected/:title", isAuthenticated, function (req, res) {
    if (req.user) {
      const queryURL = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${req.params.title}&page=1&include_adult=false&region=US`
      // console.log("search url: ", queryURL);
      axios
        .get(queryURL)
        .then(function (data) {
          // console.log(data, "SEARCH DATA");
          // console.log("searchData results", data.data.results);

          let results = data.data.results;
          console.log(results, "RESULTS")

          let newArray = [];
          for (i = 0; i < results.length; i++) {
            newArray.push(
              {
                api_id: results[i].id,
                summary: results[i].overview,
                poster_path: results[i].poster_path,
                title: results[i].title || results[i].name,
                rating: results[i].vote_average,
                type: results[i].media_type
              }
            );
          }

          let dataPass = {
            selected: newArray
          }

          res.render("selected", dataPass);
        }).catch(function (e) {
          console.log(e);
        });
    } else {
      res.render("login");
    }
  });


  // isAuthenticated,
  app.get("/signup", function (req, res) {
    // if (req.user) {
    //   res.render("profile");
    // }
    res.render("signup");
  })
  // isAuthenticated,
  app.get("/login", function (req, res) {
    // if (req.user) {
    //   res.redirect("profile")
    // }
    res.render("login")
  })

  // different query needed for getting to selected show from profile page, will need to use the :type/:id route for this functionality and will need to store media type in model
  //THIS IS THE WORKING ROUTE FOR SELECTED
  app.get("/selected/:type/:id", function (req, res) {
    const queryURL = `https://api.themoviedb.org/3/${req.params.type}/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`;
    console.log("queryURL", queryURL)
    axios
      .get(queryURL)
      .then(function (data) {
        // console.log(data.data.id, "THIS IS THE DATA");
        // console.log("this is the data",data);
        let dataPass = {
          selected: [{
            // selected: {
            api_id: data.data.id,
            summary: data.data.overview,
            airDate: data.data.first_air_date,
            poster_path: data.data.poster_path,
            title: data.data.title || data.data.name,
            rating: data.data.vote_average
            // }
          }]
        }
        // console.log(dataPass, "DATA PASS ARRAY OBJECT");

        res.render("selected", dataPass); // then the object for handlebars
      }).catch(function (e) {
        console.log(e);
      });
  })

  app.get("/search", function (req, res) {
    res.render("search");
  });

}
