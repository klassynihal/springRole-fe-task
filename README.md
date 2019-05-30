## How to launch the app locally?
* 1 -- Download and install Node(latest stable version) (npm comes along with node).<br/>
-- [Node](https://nodejs.org/)<br/>
-- [NPM](https://www.npmjs.com/)
verify with below command

```
node -v
npm -v
```

* Make sure you run all your commands inside cloned folder
* 2 -- Install the npm modules from the package.json
```
npm install
```
this command installs all the node related packages required to run the app locally in 
/node_modules folder. You can see this folder inside /ISDB folder after running npm install

* 3 -- Launch the application using below command:
```
npm start
```
The application will be running at http://localhost:3001 URL

* 4 -- No more steps
Now you don't need to repeat above steps again to run the app rather one time task.
to close server
press Ctrl+C/Command+c on terminal.
to start again 
```
 npm start
```


## Get Started
* Frontend - React, SCSS

### Frontend Part

All client related files are in './src'

* './components' -- This folder contians presentational(static/Dumb/Stateless) components with their respectively Stylesheets.

* './containers' -- This folder contians container(dynamic/Smart/Statefull) components. components with their respectively Stylesheets.

* './App,js' -- entry point and will render root element where app lives.

* package.json -- Contain all the packages for the application

## Packages Used
All packages can find in `./package.json`.

### Frontend Packages

* `react-router-dom` -- used for routing to render components on routes(from  '/'(home) ->  to '/nav' or -> '/').
* `node-sass` --  Used for compiling scss or sass to css.


## How to Contribute?
* 1 -- Clone or forked this repo
* 2 -- Now go cloned folder and open a terminal then run `git branch`.
```
* => master
```
* 3 -- Now, You have to make your branch.<br>

```
git checkout -b <branch_name>
// example => git checkout -b PKS-API_EndPoints
```
* 5 -- Now make the changes in your branch by running `git push origin your_branch_name`.
* 6 -- Then make a PR from their. If you don't know to make a PR the go to this [link](https://help.github.com/articles/creating-a-pull-request/).

## How to get connected with the main repo?
Before start working on you forked repo, make sure to sync it with parent repo.
* 1 -- Go to the master branch using `git checkout master` and run `git pull origin master`.
* 2 -- Came back to your branch using `git checkout your_branch_name` and the run again `git pull origin master`.
* 3 -- In case you can't checkout to the **master** then that means you have something that is not committed. If it's necessary then first commit it then checkout **master** otherwise run `git stash -u` then checkout to the **master**.
