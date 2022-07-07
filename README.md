npm init -y

npm install express

npm install --save-dev nodemon
 - check script in package.json says: "dev": "nodemon app.js" 
 
npm run dev

--------------

seperate out app and index.js

download jest and supertest
npm install -D jest supertest

create test folder and then copy starter tests

start to seperate out data from main app.js file

add in a few more tests for get requests

handle post requests to the wrong address

extract pokemon from app.js to a pokemons.js in the controllers folder


we have a pokemon route

/pokemon

/pokemon/id

/pokemon/electric/blue


/cars/hatchback

/cars/hatchback/ford

/cars/hatchback/ford?maxPrice=50000&minPrice=20000
