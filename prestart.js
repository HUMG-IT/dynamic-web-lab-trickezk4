{
    "name": "dynamic_web_lab",
    "version": "1.0.0",
    "description": "Làm quen với ứng dụng web động",
    "main": "index.js",
    "scripts": {
      "prestart": "node prestart.js",
      "start": "node src/app.js",
      "test": "jest",
      "cypress:run": "npx wait-on http://localhost:3000/ && cypress run",
      "test:e2e": "npm run start & npm run cypress:run"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "chromedriver": "^130.0.2",
      "express": "^4.21.1",
      "selenium-webdriver": "^4.26.0"
    },
    "devDependencies": {
      "cypress": "^13.15.1",
      "jest": "^29.7.0",
      "supertest": "^7.0.0",
      "wait-on": "^8.0.1"
    }
  }
  