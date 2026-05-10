# Teyzix Core Backend Internship: Task BE-1
## Project: Library Book CRUD API

### 📖 Project Overview
This project is a RESTful API designed to transition a public library's inventory from manual spreadsheets to a digital system. The system allows for full CRUD (Create, Read, Update, Delete) operations with built-in data validation and pagination support.

### 🛠️ Tech Stack
- Runtime: Node.js
- Framework: Express.js
- Database: MongoDB Atlas
- ODM: Mongoose
- Testing: Postman

### ⚙️ Installation & Setup
1. PREPARE THE DIRECTORY: Ensure all project files are in a folder named "task-1".
2. INSTALL DEPENDENCIES: Open your terminal in the project folder and run:
   npm install
3. CONFIGURE ENVIRONMENT: Create a file named ".env" in the root directory and add your MongoDB connection string:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string_here

### 🚀 How to Run the Server
- Development Mode (with Nodemon): npm run dev 
- Production Mode: npm start 
The server will be live at http://localhost:5000.

### 📂 API Endpoints & Usage Examples

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /api/books | Add a new book  |
| GET | /api/books | Get all books with pagination  |
| GET | /api/books/:id | Get book by ID  |
| PUT | /api/books/:id | Update a book record  |
| DELETE | /api/books/:id | Delete a book record  |

#### Request Body Example (POST/PUT)
The API requires the following fields for book records:
- Title
- Author
- ISBN
- Genre
- Available copies

Example JSON:
{
    "title": "Atomic Habits",
    "author": "James Clear",
    "isbn": "978-0735211292",
    "genre": "Self-Help",
    "availableCopies": 12
}

#### Pagination Support
Use query parameters to navigate the library inventory:
- Example: /api/books?page=1&limit=5

### 🧪 Testing & Deliverables
A Postman collection is included in the project folder:
- File: Teyzix Library API.postman_collection.json
- Automated tests are included to verify 200/201 status codes.

### 🏛️ Project Architecture
The project follows a modular and clean structure:
- config/: Database setup.
- controllers/: API logic.
- models/: Data schemas and validation.
- routes/: Endpoint definitions.
- server.js/: Main entry point.