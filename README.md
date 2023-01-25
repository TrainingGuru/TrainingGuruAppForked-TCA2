# TrainingGuruApp
This repo is for the apps source code client side and server side development will be done here
Include different downloads etc to RUN
This is the main then Maybe have one in client and backend for setting up them bits

# Frontend Rules
Components, Pages: PascalCase

Functions: camelCase

Assets:  kebab-case

Class names: use the BEM naming convention

Files

assets - global static assets such as images, svgs, company logo, etc.

components - global shared/reusable components, such as layout (wrappers, navigation), form components, buttons

services - JavaScript modules

store - Global Redux store

utils - Utilities, helpers, constants, and the like

pages -  the majority of the app would be contained here

# Backend Rules
PascalCase - Filenames

UPPERCASE for Constants

lowerCamelCase for variables, properties and function names

Files
.env file - sensitive data (API keys etc) 

src file - Contains the project code
- index.js: Sever Starting point
- Config: Code for connection to database etc
- Routes: Endpoints code - different files for each endpoint e.g Trainers.js = /Trainers endpoint
- Models: Database data schema for sending data to Database
