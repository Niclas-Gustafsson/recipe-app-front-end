
# RecipeApp Frontend

## Description

The project is a school assignment aimed towards a
full stack solution for a recipe website. It’s built upon Angular,
MariaDB and Laravel connected to Spoonacular’s recipe API.
User and list management is handled by the API built in Laravel.

A visitor can browse and search recipes,
read about specific recipes and has the option to register an account.

A logged in user has the features of creating different lists,
each with a name of choice for storing recipes in.
Every list and recipes added to a list can be deleted.

The backend for this project can be found here [Github repo](https://github.com/Niclas-Gustafsson/be-recipe-app)

## Requirements and goals for the assignment was:
### Goals
Users should:
- Get recipe suggestions
- Be able to filter their searches by meal type and diets
- Click a recipe to read the details
- Be able to create lists
- Be able to save recipes to lists
- Be able to show a list and, if saved, recipes saved to clicked list
- Be able to delete lists and saved recipes

## Requirements
- Frontend should be built with Angular
- Consume an external API to fetch recipes and display on the website
- The website should be responsive.

## Languages and tools used:
- Angular
- Bootstrap
- Laravel
- Node.js
- Docker
- Netlify
- Heroku

## Getting started

1. Open a terminal/ navigate to the desired destination folder on your computer.
2. Clone the local-development branch with the command: ```git clone -b local-development git@github.com:Niclas-Gustafsson/recipe-app-front-end.git```
3. Open the project in your preferred IDE.
4. Open your browser and head over to https://spoonacular.com/food-api and create an account, it is the recipe API used for this project (It’s free!)
5. Once logged in, head over to the profile and click the button “show/ hide API key”, copy the key to your clipboard and go back to your IDE where the project is open.
6. In the project root, create a file called .env and type the exact variable name: API_KEY=[The API key you copied goes here after the = without square brackets], Example: API_KEY=123my4api5key56
7. Save the file.
8. Open an integrated terminal and run the command: npm i
   This will install the required dependencies for the project. Shouldn’t take too long.
9. Next, run the command: “npm run start” or “npm start” this will initiate the project with the API_KEY you have provided in the .env file and serve the project in the browser at http://localhost:4200.

## Design

The design wasn't something we were assessed on for this assignment.
I did start a design in Figma but realized during the planning stage that I wouldn't have time for a neat frontend.
I went with bootstrap for this one, to more or less align elements across the pages.


## Routes


| URi | Parameter | Type     | Description                |
| :-- | :-------- | :------- | :------------------------- |
| `/` |  |  | Renders home page |
| `/login` |  |  | Renders login page |
| `/register` |  |  | Renders sign up page |
| `/recipe/:id` | `id` | `string` | Renders detailed page for a specific recipe |
| `/user/list` |  |  | Renders the list page for logged in users |
| `/user/list/:id` | `id` | `string` | Renders login page |


## Thoughts
The assignment has really tested one's capability to have a MVP up and running in a short period of time.
I had to put the design aside to work on all the new concepts introduced with the assignment.
Angular was all new to me, and I felt it was kind of hard to grasp, and still is.
Also working with an external API was unfamiliar.

The first few days was all about putting the pieces together, logic and backend architecture, while working on a design.
I realised quite early that I didn't have time for an in-depth design.
So I decided to make use of bootstrap for a quick layout while focusing on the logic of the application.

With minor planning I dove in headfirst and solved the problems as they came. Not at all optimal
but I felt I had to work with the framework to learn it.

### In a more optimal scenario I would've:
- Given more love to the design.
- Do proper planning of both the frontend structure/ logic, and the backend logic.
- Cache cacheable responses
- Implement a notification system
- Not use a request within a request to solve updating issues in frontend. Such a rookie solution.
- Rewrite the exception response in Laravel to return a useful JSON response to act on in the frontend.
- Make the frontend more reactive on responses from the backend.
