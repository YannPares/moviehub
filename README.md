# MovieHUB project #

'#HTML5 #CSS #JS #ES6 #Typescript #nodeJS #mongoDB #mongoose #prisma #SQL #postgreeSQL #cloudinary #decript #Auth0'

## Alternated branchs on gitHub to different backend dependencies to connect to API: ##

    *mongoose
    *prisma
    


## Get started

To run, you just have MongoDB installed and running, and NodeJS installed.

* Start MongoDB
* Clone the repo
* `npm install` to install API dependencies and `npm start` to start the API
* Open a new terminal and navigate to the `client` directory, `npm install` to setup the Angular dependencies, and `npm start` to start the local development server
* Open http://localhost:4200 to see the application

## Detailed setup & deployment documentation

### Introduction


dependencies:
+ express 4.18.2        
+ mongoose 8.0.0        

devDependencies:        
+ @types/express 4.17.20
+ @types/node 20.8.10   
+ dotenv 16.3.1
+ nodemon 3.0.1
+ rimraf 5.0.5
+ ts-node 10.9.1
+ typescript 5.2.2

### Run on your local machine
 
> ### Prerequisite
> You should install [Mongo DB](https://docs.mongodb.com/manual/installation), [npm and node.js](https://www.npmjs.com/get-npm) on your local machine.


After cloning the project, first you need to run below commands on your terminal to activate your local Mongo DB:
```sh
$ mongod
```
In another tab:
```sh
$ mongosh
```

Then run "npm start" in the mean directory of the project if your local server is connected to your local mongodb, then you will run "npm start" in the client subfolder to compile your client side.
```sh
$ npm start
```
In another tab:
```sh
$ cd client 
$ npm start
```

Run -> [http://localhost:3001](http://localhost:3001/)


### Deployment



#### Configuration


#### Deployment client-side (REACT)

After applying your changes in client-side, which written in React-Vite framework, you must be able to deploy it successfully. You can find client-side files in /frontend directory. 

```sh
$ pnpm run dev'
```


### Author and Contributors
