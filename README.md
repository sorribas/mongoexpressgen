# Mongo Express Generators

Generate [express](http://expressjs.com/) apps with [MongoDB](http://www.mongodb.org/) (using [mongojs](http://github.com/gett/mongojs)).

## Installation

You can install it through npm

```
[sudo] npm install mongoexpressgen -g
```

## Usage

The first thing you have to do is generate your express app and add the mongojs dependency.

```
mkdir myapp
cd my app
express
# edit the package.json to add the mongojs dependency
npm install
```

After that you can start using the generators to generate your db configuration file.

```
mongoexpressgen db atlasdb countries cities
```

where `atlasdb` is the name of the MongoDB database and `countries` and `cities` are the name of the collections in said database.

After that you can generate a RESTful API with the generator.

```
mongoexpressgen api countries
```

Now you can run your app and test your API.

```
node app.js
# Go to http://localhost:3000/countries and test your API.
```

## What's next?

Right now the mongoexpressgen only generates RESTful APIs. The next step is to make it generate full CRUDS with forms and views. I will try to work on this shortly.
