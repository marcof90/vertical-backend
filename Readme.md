# Information

Hi i'm Marco and I created this project to solve a coding challenge for Vertical.

You will find in this repo the backend of the challenge. This backend was
developed using Nodejs and Expressjs

if you want to visit the live demo of this backend go to the **documentation** section

### Local Deploy

Clone this repo and then create an *.env* file in the root of the project add to it an environment variable *DB_STRING* use a string connection to a MongoDB database

In the root of the project run

`npm install`

For development run

`npm run dev`

To add tests modify the files in `src/tests` and run them using

`npm run test` or `npm test`

### Heroku Deploy

In the root of the project run

`heroku login`

`git init`

`heroku git:clone -a vertical-backend$ cd vertical-backend`

`git add .`

`git commit -m "heroku push`

`git push heroku master` 

If you got any problem may should create a heroku project yourself and change the *heroku git:clone...* command

### Documentation

Documentation created using [apidoc](https://apidocjs.com/)

to generate the api documentation use the command

`apidoc -i src/routes -o doc/`

visit the live documentation [here](https://vertical-backend.herokuapp.com/documentation)

