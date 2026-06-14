# cooking-merrilly

A cookbook API designed for CSE341 web services, mongoDB, and Render.
This site is intended to expand to include organized family recipes, loved external inclusions, and original creations.

## Author

**Student:** Harrison Merrill
**Semester:** Spring 2026
**Live Site:** [View Site](https://hwalkermerrill.github.io/mcooking-merrilly/)

## About

A cookbook API designed for CSE341 web services, mongoDB, and Render.
This site is intended to expand to include organized family recipes, loved external inclusions, and original creations.

## Structure

```text
cooking-merrilly
├── public/
├── src/
│   ├── controllers/
│   │   ├── meals.js
│   │   ├── recipes.js
│   │   └── users.js
│   ├── middleware/
│   │   ├── DataBase/
│   │   │   ├── meals.js
│   │   │   ├── recipes.js
│   │   │   └── users.js
│   │   ├── auth.js
│   │   └── passport.js
│   ├── models/
│   │   ├── DataBase/
│   │   │   ├── runSeedFiles.js
│   │   │   ├── seedMeals.js
│   │   │   └── seedRecipes.js
│   │   ├── connection.js
│   │   ├── Meal.js
│   │   ├── Recipe.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── index.js
│   │   ├── meals.js
│   │   ├── recipes.js
│   │   └── users.js
│   ├── utils/
│   │   └── index.ts
│   └── views/
├── server.js
├── swagger-output.json
└── swagger.js
```

## Features to be Implemented (Checklist)

### Project Setup

- [x] Initialize Node
- [x] Create project structure
- [x] Setup environment variables

### Database

- [x] Create new MongoDB database
- [ ] Implement Mongoose models (Recipe, User)

### REST API (Week 1 Requirement)

- [x] Create GET /recipes
- [x] Create POST /recipes
- [x] Create PUT /recipes
- [x] Create DELETE /recipes
- [ ] Add validation + error handling

### API Documentation

- [x] Setup Swagger
- [x] Document GET, GET by ID, POST, PUT, DELETE

### Deployment

- [x] Create new Render service
- [x] Add environment variables
- [x] Deploy and test live API

### OAuth

- [ ] Implement Google OAuth
- [ ] Store authenticated users in DB

### GraphQL (Extra Credit)

- [ ] Setup GraphQL schema
- [ ] Implement queries
- [ ] Implement mutations
- [ ] Add GraphQL endpoint

### Typescript (Extra Credit)

- [ ] Configure typescript
- [ ] Translate all .js into .ts

### Validation & Error Handling

- [ ] Add Zod/Joi validation
- [ ] Add global error handler

### Final Polish

- [ ] Update README
- [ ] Test all endpoints
- [ ] Record YouTube demo
