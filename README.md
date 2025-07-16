# SugarCoded — The Sweet Shop

A minimal sweet shop system built with HTML, CSS, and JavaScript, following a test-driven development (TDD) approach.

## About the Project

This is a simple UI layer for a sweet shop inventory system, built as part of the Incubyte TDD assessment. The core logic and test cases are implemented in JavaScript using TDD practices. This UI demonstrates the basic functionalities like adding, deleting, and viewing sweets.

> The real flavor (logic + tests) is in the codebase. The Ui is just for basic add and delete :)



[Live Demo](https://mitsubhatt.github.io/sweet-shop-management-system/)

[View Full Test Report](./test-report.md)


## Features

- Add a sweet with name, category, price, and quantity
- Delete sweets by name
- View inventory in a clean table layout
- Smooth transitions and dynamic rendering
- Responsive & lightweight frontend


## TDD Implementation

Test-driven development is implemented using **Jest**.  
All business logic is handled in a class-based approach inside `sweetShop.js`, with tests verifying:

- Required field validation
- Preventing duplicates
- Deleting sweets
- Returning current inventory


## How to run this project

- git clone https://github.com/mitsubhatt/sweet-shop-management-system.git
- cd sweet-shop-management-system
- npm install
- npm test

You can also open index.html directly in a browser to use the UI.
