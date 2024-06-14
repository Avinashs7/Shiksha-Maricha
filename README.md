# Shiksha Marichi - An Edtech Platform

"Shiksha Marichi" is an edtech platform which has role based authentication. Where teacher is authorized to upload courses and it is uploaded to cloud storage and it can be viewed in the web application through media player. Web app consists student role who can enroll for the courses provided by the tutor. 

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
