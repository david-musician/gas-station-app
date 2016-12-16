# FUEL EFFICIENCE

## TODO
* Incorporate $scope.$watch
* POST data from forms
* Include some gas stations around Amarillo/Canyon
* For gas prices: Screen-scrape gasbuddy, turn into json
* Remove all unnecessary, commented code
* Incorporate uglify.js in order to minify files
* Fix mouseout for buttons
* Encrypt and Hide API key(s)
* Determine if home.js and singleton.js are needed and remove if unnecessary
* Fix "Jump to Top" functionality
* Maybe: Fix linking directly to views (NOT NECESSARY, but a nice feature)

## CHANGELOG
* Installed Express app and dependencies
* Successfully setup app
* App runs
* Installed node modules
* Added Views and Controllers
* Added and Fixed Google Maps
* Fixed nodemon.json
* Added Hydrogen theme
* Fixed footer
* Removed sidebar
* Fixed menu style
* Repaired menu animation
* Fixed style
* Created stateList custom directive
* Renamed footerGeneric directive to Footer
* Fixed footer
* Fixed the date in the footer (old code):
~~~~
<span date-now="yyyy"></span>
~~~~
* Removed sideBar directory and files
* Fixed all views to follow the layout in home.view.html
* Fixed where a bug where the footer would call the home controller twice
* Added directives
* Fixed links in menu to properly reflect active state of pages
* Created vehicle schemas and uploaded to mLab (my own API)

## REFERENCES
Heroku App: https://damp-meadow-93246.herokuapp.com/
Github Repo: https://github.com/david-musician/gas-station-app

Favicon:
https://www.iconfinder.com/icons/111078/gas_icon (Not used at the moment)

Bootstrap template:
https://startbootstrap.com/template-overviews/creative/

The factory creates singletons.

Using Google Maps
https://developers.google.com/maps/documentation/javascript/tutorial
https://developers.google.com/maps/documentation/javascript/get-api-key

To get a key:
https://developers.google.com/maps/documentation/javascript/tutorial


https://angular-ui.github.io/angular-google-maps/#!/api/GoogleMapApi
Use lodash version lodash 3.10.1
https://cdn.jsdelivr.net/lodash/3.10.1/lodash.min.js

https://blog.hartleybrody.com/web-scraping/

curl -i -H "Accept: application/json" https://www.gasbuddy.com/Station/15494

Screen scraping
https://scotch.io/tutorials/scraping-the-web-with-node-js

Conditional DOM elements
http://stackoverflow.com/questions/14077471/conditional-logic-in-angularjs-template

https://www.globalcarsbrands.com/all-car-brands-list-and-logos/#us

Consider using this as an API for gas prices (if they have it):

Push to mLab and Heroku: insert Airport data
https://www.waze.com/about/dev

https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-ubuntu/
https://docs.mongodb.com/v3.2/tutorial/

Remove githup repo

https://developers.google.com/maps/documentation/distance-matrix/

## NOTES

www.mygasfeed.com/ would be perfect, BUT it's so out of date it's useless.
  This means screen-scraping GasBuddy