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

Each topic is sorted by unit, with files required for the main functioning of the
site living in the root folder, and demonstrations held inside the demo folder.

```text
cooking-merrilly
cooking-merrilly
├── public/
├── src/
│   ├── controllers/
│   │   └── routes.js
│   ├── middleware/
│   ├── models/
│   │   └── connection.js
│   ├── utils/
│   └── views/
├── swagger-output.json
└── server.js
```

## Features to be Implemented (Checklist)

### Project Setup

- [ ] Initialize Node + TypeScript project
- [ ] Create project structure
- [ ] Configure tsconfig.json
- [ ] Setup environment variables

### Database

- [ ] Create new MongoDB database
- [ ] Implement Mongoose models (Recipe, User)

### REST API (Week 1 Requirement)

- [ ] Create GET /recipes
- [ ] Create POST /recipes
- [ ] Add validation + error handling

### API Documentation

- [ ] Setup Swagger
- [ ] Document GET, GET by ID, POST, PUT, DELETE

### Deployment

- [ ] Create new Render service
- [ ] Add environment variables
- [ ] Deploy and test live API

### OAuth

- [ ] Implement Google OAuth
- [ ] Store authenticated users in DB

### GraphQL (Extra Credit)

- [ ] Setup GraphQL schema
- [ ] Implement queries
- [ ] Implement mutations
- [ ] Add GraphQL endpoint

### Validation & Error Handling

- [ ] Add Zod/Joi validation
- [ ] Add global error handler

### Final Polish

- [ ] Update README
- [ ] Test all endpoints
- [ ] Record YouTube demo
