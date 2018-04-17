[![Build Status](https://travis-ci.org/lexbonder/zelda-cookbook.svg?branch=master)](https://travis-ci.org/lexbonder/zelda-cookbook)

[![Waffle.io - Columns and their card count](https://badge.waffle.io/lexbonder/zelda-cookbook.png?columns=all)](https://waffle.io/lexbonder/zelda-cookbook?utm_source=badge)

# Legend of Zelda: Breath of the Wild Cookbook

The new Legend of Zelda game features the ability to gather ingredients from around the world and cook them into different recipes. Each recipe gives Link different benefits such as recovering health and gaining resistance to cold.

This app provides an easy to use interface that allows the user to see what ingredients are required to make each recipe. No more wasting rare ingredients on failed recipes!

## Getting Started

### Prerequisites

To get a copy on your local machine you'll also need to clone down and install:

[Zelda Cookbook Backend](https://github.com/lexbonder/zelda-cookbook-backend)

### Installing

Clone this repo

```
git clone https://github.com/lexbonder/zelda-cookbook.git
```

Install dependencies

```
npm install
```

Start the server
```javascript
// zelda-cookbook should run on port 3001
// run the server (zelda-cookbook-backend) first on port 3000

npm start
```

## Running the tests

This app uses [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/docs/api/) for testing.

To run the tests:
```
npm test
```

## Deployment

This site is deployed with [Surge.sh](https://surge.sh/)

*https://zelda-cookbook.surge.sh/*

## Tech Stack

* [Create React App](https://github.com/facebook/create-react-app)
* [React](https://reactjs.org/docs/hello-world.html)
* [Redux](https://redux.js.org/)
* [SASS](https://sass-lang.com/)

## Authors

* **Alex Bonder** - *lexbonder@gmail.com* - [GitHub](https://github.com/lexbonder)

* **Jeff Bender** - *j25bender@gmail.com* - [GitHub](https://github.com/j25bender)

* **Spencer Herms** - *slherms@gmail.com* - [GitHub](https://github.com/PreciseSlice)

## Screenshots

![Landing Page](./LoZ-cookbook.png)

## Acknowledgments

* Ingredient and recipe data scraped from [Zelda Wiki](https://zelda.gamepedia.com/Main_Page) and [orcz.com](http://orcz.com/Category:Breath_of_the_Wild_Wiki) using [Nightmare.js](http://www.nightmarejs.org/)

* Nintendo of America Inc.,. (2017). The Legend of Zelda: breath of the wild.
