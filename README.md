# SD

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

------
# Angular Commands

https://angular.io/cli

**New Component**

    ng g c navbar --skipTests=true --module ../
    ng g c sideNav --skipTests=true --module ../

**New Services**

    ng g s navbar --skipTests=true



------

# Create Additional Folders Under src/app

* components
* models
* services
* views

## components

* navbar
* sideNav

## models

* ILogin.ts
* INavItem.ts

## views

* about
* home
* landingPage
* login

------


# Add Angular Material

    ng add @angular/material

# Add Font Awesome

    npm install --save @fortawesome/fontawesome-free

# Add Flex Layout

    npm i -s @angular/flex-layout @angular/cdk 