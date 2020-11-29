# Streamer
![Image of Logo](./public/assets/img/streamer-logo.png)

## Intro

Link to application: https://infinite-bayou-97369.herokuapp.com/

UserName: test@test.com 

Password: test

Streamer was originally a group project worked on while going through the University of Denver's Full Stack MERN program. The original concept was that this application would help you keep track of where you are in a series, as well as being able to see where to watch it online -- hense the name Streamer. 

This application allows users to create an account and keep track of what titles they are watching, want to watch, and have already completed. 

From the original description: 

>As a team we felt motivated to create this application because the world has so many different shows and movies. 
>Some of which you can only find on one of the many specific platforms available today. Streamer aims to help users filter and organize
>all of the many options so that no one loses track of a favorite show.

>Streamer uses authentication based log-ins to grab and store data into our database. 
>Each user has their own data, where they can keep track of the shows/movies they wish to watch, 
>what shows/movies they have already started, and which shows they have completed.
>Each user can find a title by either searching for it specifically, or they can browse the top 20
>mos popular on the home page. Their profile shows all of the titles the user has stored, as well as a chart to give a good visual
>of current viewing habits.

>This project has been a fun and challenging experience. It showcases just how far we have all come
>in learning these new technologies, and our journey as developers.


## What I originally worked on, and what I have since updated

* Home UI

I originally hardcoded popular titles into two carousels on the Home page, and displayed using Owl Carousel and Handlebars. I believe an acceptable call will be pulling in "trending" titles (https://api.themoviedb.org/3/trending/all/day?api_key=), which will then have to be sorted between media types. Since completing the bootcamp I have updated the carousel to display only the bubbles for moving through titles, rather than bubbles and arrows.

* Login / Nav Bar / Search

These areas were completed by other team mates. Going forward I would like to update the signup and and login process to have a better experience. I also want to only display the options (Signup/Login/Logout) when appropriate, depending on if the user is logged in or not. The search icon next to the text box does not have a click event, and can only be fired by hitting enter, which needs to be changed.

* Profile UI

I originally created the UI for this page, dynamically updating using Handlebars and creating visualization for the data both through a Chart js box that indicates how many titles you currenlty have in each catagory, as well as populating the carousels for each catagory. When we turned in the project the calls were not firing, so clicking on the titles did not redirect. I have since corrected.

* Selected UI

With how I sat the handlebars up, this page can be used both for an individual title or for displaying a list of titles based on your search term. Originally, on each click of the buttons a new entry would be created. I now have correctly sat up to update if the entry is preexisting, however I feel like the syntax is incorrect still even if working.

* Overall

I presented the team with several color palettes to choose from, and we decided on the current. Amber then created our Streamer logo from these same colors. The application is responsive but mobile version smaller than 540 starts to look awful.


## Personal Todos and Team Planned Future Developments

* Fix hardcoded front page to an actual call
* Resolve responsiveness issues
* Rename to a more appropriate title for what it actually does?
* Keep track of episodes and what episode a user is on
* Show a list of where to stream shows/movies
* Add profile pictures for user profile customization
* Add browse pages for movies and TV shows. Including filters by most popular, genre, etc.
* Give user the option to mark favorites/least favorites
* Track time spent watching per user


## Deployment 
[Heroku](https://infinite-cliffs-65236.herokuapp.com/) ||
[Github](https://github.com/kacox1251/Streamer) ||
[Presentation](https://docs.google.com/presentation/d/1UdXNs89kjtn8vqJ2SLocVmhPUWjGqlNWaOq3ye4Sc0A/edit?usp=sharing)


## Credits

__Collaborators:__
    * [Ambers's GitHub](https://github.com/ambernina)
    * [Catalina's GitHub](https://github.com/catalinarose1361)
    * [Jody's GitHub](https://github.com/missjody)
    * [Krystal's GitHub](https://github.com/kacox1251)

__Server-side APIs:__
    * [The Movie Database](https://www.themoviedb.org/)

__Third-party API:__
    * [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)
    * [Granim.js](https://sarcadass.github.io/granim.js/index.html)
    * [Chart.js](https://www.chartjs.org/)

__CSS Framework:__
    * [Materialize](https://materializecss.com/)

__Favicon Created with:__
https://favicon.io/
![Favicon](./public/assets/img/favicon_io/favicon-16x16.png) 


## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
