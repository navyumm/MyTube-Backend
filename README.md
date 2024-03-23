# YouTube-Backend
Welcome to the YouTube-Backend project! This backend server is built with JavaScript using Node.js, Express, and MongoDB to support the core functionalities of a video-sharing platform. In addition to basic user authentication (Register, Login, Logout), the backend also includes features for video management, including Video Upload, Update, and integration with Twitter.

The backend server is also integrated with the Cloudinary API for video and image storage, and the Twitter API for posting and deleting tweets. The server also includes features for user subscriptions, comments, likes, and views.

## Technologies
- ***Node.js*** - JavaScript runtime environment
- ***Express*** - Web application framework for Node.js
- ***MongoDB*** - NoSQL database
- ***Mongoose*** - MongoDB object modeling for Node.js
- ***Cloudinary*** - Cloud-based image and video management

## Features
- ***User Authentication*** - Register, Login, Logout, Update Profile

- ***Video Management*** - Upload Video, Update Video, Get All Videos

- ***Integrated Twitter*** - Make Tweet, Get Tweets, Delete Tweet, Update Tweet

- ***Subscriptions*** - Subscribe to User, Unsubscribe from User, Get Subscriptions

- ***Comments*** - Add Comment, Get Comments, Delete Comment

- ***Likes*** - Like Video, Dislike Video, Get Likes

- ***Views*** - Increment View Count, Get Views

## Table of Contents

- **[functionality](https://)**
    - [User Authentication](https://)
    - [Video Management](https://)
    - [Integrated Twitter](https://)
    - [Subscriptions](https://)
    - [Comments](https://)
    - [Likes](https://)
    - [Views](https://)

## Getting Started
To get started with the YouTube-Backend, you will need to have Node.js and MongoDB installed on your local machine. Once you have these installed, you can clone the repository and install the necessary dependencies using the following commands:

```
git clone
cd YouTube-Backend
npm install
```

setup the environment variables in a `.env` file in the root directory of the project. The .env file should contain the following variables:

```
PORT=8000
MONGO_URI=
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

After installing the dependencies, you can start the server using the following command:

```
npm start
```

The server will start on port 8000 by default, and you can access the API at `http://localhost:8080`.

## API Testing in Postman
You can test the API endpoints using Postman. The collection for the YouTube-Backend API is available [here]().

<a href="http://example.com" style="background-color: #FF6C37; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 12px;">Run in Postman</a>




