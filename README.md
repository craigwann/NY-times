# New York Times

#### Epicodus Angular: site rebuild, 08/03/2018

#### By Craig Wann

## Description

Website rebuild of New York Times.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Specs
1. As a user, I want to be able to see a list of articles.
1. As a user, I want to be able to select an article and see the full article with images.
1. As a user, I want to be able to filter all articles.
1. As a user, I want to be able to filter which articles I have not read.
1. As a user, I want to be able to filter which articles I have read.

##Future Specs
1. As a user, I want to be able to filter articles by category (world, arts, sports, technology, business...).
1. As a user, I want to be submit articles directly to site.


## Development server

Run `ng serve` or `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Firebase API key

Make a new file in `src/app/api-keys.ts` to add Firebase credentials.
`export const masterFirebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx.firebaseapp.com",
  databaseURL: "https://xxxx.firebaseio.com",
  storageBucket: "xxxx.appspot.com",
  messagingSenderId: "xxxx"
  };`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
