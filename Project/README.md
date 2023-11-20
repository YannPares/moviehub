# MovieHUB project #

'#HTML5 #CSS #JS #ES6 #Typescript #nodeJS #mongoDB #mongoose #prisma #SQL #postgreeSQL #cloudinary #decript #Auth0'

## Alternated branchs on gitHub to different backend dependencies to connect to API: ##

    *Devmongoose with mongoose ODM
    *Main branch with prisma ORM


## Get started

To run, you just have MongoDB installed and running, and NodeJS installed.

* Start MongoDB
* Clone the repo
* `pnpm install` to install API dependencies and `pnpm start` to start the API
* Open a new terminal and navigate to the `frontend` directory, `pnpm install` to setup the React dependencies, and `pnpm start` to start the local development server
* Open http://localhost:5173/ to see frontend
* Open http://localhost:3001 to see the API console.log

*** 
If there's any issue, check the env.development file and configure the host or navigate directly to 4001. Adjusting the host configuration within the env.development file might resolve the specific issue. If that doesn't work, directly accessing the 4001 address might provide further insights into what's causing the problem.

## Detailed setup & deployment documentation



### Run on your local machine
 
> ### Prerequisite
> You should install [Mongo DB](https://docs.mongodb.com/manual/installation), [pnpm and node.js](https://www.pnpmjs.com/get-pnpm) on your local machine.


After cloning the project, first you need to run below commands on your terminal to activate your local Mongo DB:
```sh
$ mongod
```
In another tab:
```sh
$ mongosh
```

Then run "pnpm start" in the mean directory of the project if your local server is connected to your local mongodb, then you will run "pnpm start" in the client subfolder to compile your client side.
```sh
$ pnpm start
```
In another tab:
```sh
$ cd frontend 
$ pnpm start
```

Run -> [http://localhost:5173/](http://localhost:5173//)


### Deployment




#### Deployment client-side (REACT)

After applying your changes in client-side, which written in React-Vite framework, you must be able to deploy it successfully. You can find client-side files in /frontend directory. 

```sh
$ pnpm run dev
```


### Author and Contributors

Ian Parés Morel