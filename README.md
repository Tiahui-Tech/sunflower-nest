<div align='center'>
  <img src='https://i.imgur.com/DJOtiMD.png' alt='Sunflower Banner' />
</div>

Welcome to the Sunflower API project. This API is developed using [NestJS](https://github.com/nestjs/nest), a powerful Node.js framework for building efficient and scalable server-side applications. It's integrated with GraphQL for streamlined queries and Prisma as an ORM to interact with the database.

## 🌼 Description

The API is designed to provide anime recommendations based on various criteria. Users can search for animes by genre, popularity, rating, and more. Additionally, the API offers specific details about each anime, such as synopsis, episodes, main characters, and more.

## 🌱 Installation

Follow these steps to install and set up the project on your local machine:

1. **Install Dependencies**: Before starting, ensure you have Node.js and npm installed on your machine. Then, install all the project's dependencies with:
   ```bash
   $ npm install
   ```

2. **Generate Prisma Types**: For the API to interact correctly with the database, it's essential to generate the Prisma types. Run the following command:
   ```bash
   $ npx prisma generate
   ```

## 🚀 Running the API

Once you've installed all the dependencies and set up Prisma, you can run the API in the following ways:

- **Development Mode**: Run the API in development mode. This will automatically restart the server every time you make a change to the code.
  ```bash
  $ npm run start:dev
  ```

- **Production Mode**: If you wish to run the API in production mode, use the following command:
  ```bash
  $ npm run start
  ```

After starting the API, you can access the GraphQL playground in your web browser by going to:
```
http://localhost:3000/graphql
```
This URL can be used in both development and production modes to interact with the API using GraphQL queries and mutations.

## 📜 License

This project is under the [MIT license](LICENSE). You can check the license file for more details.
