# Shiksha Marichi - An Edtech Platform

📚✨ Introducing Shiksha Marichi: Revolutionizing Education Through Technology!

Shiksha Marichi is a cutting-edge edtech platform designed to transform the learning experience. Here's what makes us special:

🔐 Role-Based Authentication: Ensuring secure and personalized access for both teachers and students.

👩‍🏫 Empowering Educators: Teachers can seamlessly upload their courses to our cloud storage, making them instantly accessible.

🎥 Enhanced Learning: Students can easily enroll in courses and view them through our integrated media player, right within the web application.

Join us on Shiksha Marichi and be a part of the future of education! 🚀📖

## Future Enchancement

AI generated assessment to evaluate the student performance and track the performance and give more practical scenario to solve a certain problem on the topics.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Project Structure](#project-structure)
- [Client-side Usage](#client-side-usageport-5173)
- [Server-side Usage](#server-side-usageport-8000)
  - [Create .env File](#prepare-your-secret)
  - [Start the Server](#start)
- [Author](#author)

## Getting Started

Follow this step by step guide to get the project in local machine running.

## Prerequisites

- [MySQL](https://dev.mysql.com/downloads/installer/)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)
- [Cloudinary account](https://cloudinary.com/)

Notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Installation

## Clone the repository

```terminal
$ https://github.com/Avinashs7/Shiksha-Marichi
$ cd Shiksha Marichi
...
```

## Project structure

```terminal
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

## Client-side usage(PORT: 5173)

```terminal
$ cd client    // go to client folder
$ npm i        // npm install packages
$ npm run dev  // run it locally
...
```

## Server-side usage(PORT: 8000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET(ACCESS_TOKEN) in .env for authentication and cloudinary cloud name, cloudinary api key, cloudinary api key, cloudinary api secret and cloudinary url)

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
...
```

## Author

- [Avinash](https://www.linkedin.com/in/avinash-s007/)
- [Aboo Bakar](https://github.com/Abubakar2807)
