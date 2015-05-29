Angular Portfolio
=================
This is a small portfolio site done for a friend that can be served  
through dropbox's public folder or anything that can serve static  
files with the correct mime-type.  
  
### Technologies used in this project: ###
- node/\*npm
- GruntJS
- Sass
- AngularJS
- Bootstrap
- JQuery
  
\*only need to understand npm for the build system (gruntJS) to work  
  Starting a server with node is only if the website is to be viewed  
  locally.  
  
### To view project locally: ###
(1) npm install  
Will download required modules for concatenating and minifying css and js  
Currently, angular will complain about a dependency injection resolution  
error when minified, so it's better not to use it for now.  
  
(2) grunt  
Will build files stored in includes and create respective main.js and main.css  
files in scripts and styles.  
  
(2) node server.js  
Will create a listener on http://localhost:8000 so that the files can be  
viewed locally. In a production server, this command is not needed but  
angular cannot fetch local files using template includes due to cross origin  
policy which is a good but troublesome thing.  

