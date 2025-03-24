# Shrinkly - URL Shortener
Shrinkly is a simple and efficient URL shortening web application built using Express, MongoDB, and JWT. It allows users to shorten long URLs into compact, easy-to-share links.

### Features
- Shorten long URLs into unique, short links.
- Track the number of times a shortened URL has been accessed.
- User authentication with JWT (JSON Web Token).
- Secure and efficient database storage with MongoDB.
- Redirect users seamlessly from short links to their original URLs.

### Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Other Tools: Mongoose, dotenv, bcrypt

### Installation & Setup

#### Prerequisites
- Ensure you have the following installed:
- Node.js & npm
- MongoDB (local or Atlas)

#### Steps
- Clone the repository:
git clone `https://github.com/your-username/shrinkly.git`
`cd shrinkly`

- Install dependencies:
`npm install`

- Set up environment variables:
Create a .env file in the root directory and configure the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
BASE_URL=http://localhost:5000
```

Start the server:
`npm start`

The server will run on `http://localhost:5000`

### **Contributing**

Feel free to fork this project, submit pull requests, or raise issues. Contributions are always welcome!

### **License**

This project is licensed under the MIT License.

### Author

Developed by Akash Khedar. If you have any questions or feedback, feel free to reach out!


------------



Made with ❤️ for URL shortening!
