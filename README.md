# Daily Planner

## Overview

The Daily Planner is a web application designed for effective daily schedule management. It includes features such as user authentication, task management, and email verification. Built with Node.js, Express, and MongoDB, this application aims to provide a secure and user-friendly experience.

## Features

- **User Authentication:**
  - **Sign In/Sign Up:** Secure user account creation and login.
  - **Password Hashing:** Secure storage of user passwords.
  - **Email Verification:** Users receive a verification email with a token to confirm their email addresses.

- **Task Management:**
  - **Add Task:** Users can add tasks to their daily schedule.
  - **Update Task:** Modify existing tasks.
  - **Delete Task:** Remove tasks from the schedule.

- **Token Authentication:**
  - **JWT Authentication:** Protect routes using JSON Web Tokens.
  - **Token Verification:** Middleware to validate JWT tokens.

## Technologies Used

- **Back-End:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **APIs:** Nodemailer for email verification, JSON Web Tokens (JWT) for authentication

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ayaelhenawy/Daily-Planner.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up the Database:**

   Ensure MongoDB is running on your machine or use a cloud-based instance. Update the connection string in your `.DailyPlanner` file.


6. **Run the Application:**

   ```bash
   nodemon
   ```

   The application will be accessible at `http://localhost:3000`.

## Usage

1. **User Authentication:**
   - **Sign Up:** Register a new account and verify your email.
   - **Sign In:** Log in with your credentials.

2. **Task Management:**
   - **Add Task:** Use the form to add new tasks.
   - **Update Task:** Edit tasks from your schedule.
   - **Delete Task:** Remove tasks as needed.



