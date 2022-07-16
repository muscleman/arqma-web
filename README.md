# ArqmaWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.8.

# Development server

Run `ng serve --configuration=en-US -o` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. Ensure localize section in architect.build.options contains one the locale

Or comment line 8,9,10 in angular.json and run `ng serve -o`

# Deploying to Github Pages

Ensure new locales are added to angular.json

Run `ng deploy --base-href=/arqma-web/`

# Style Guides

All variable classname etc should use good self documentation. NO ~~let x = 10;~~

[Angular](https://angular.io/guide/styleguide)

[Typescript](https://ts.dev/style/)

# Unit Testing

All code should be backed by sufficient unit test to provide near 100% code coverage.

[Unit Testing](https://jestjs.io/docs/getting-started)

