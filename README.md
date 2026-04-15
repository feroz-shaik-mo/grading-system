# Grading System

## Project Documentation
This project is designed to manage and automate the grading process for educational institutions, aiming to make evaluations more efficient and accurate.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/feroz-shaik-mo/grading-system.git
   cd grading-system
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment configuration**:
   Create a `.env` file based on the `.env.example` provided, and fill in the required environment variables.
4. **Run the application**:
   ```bash
   npm start
   ```

## API Endpoint Documentation
- **GET /api/students**: Retrieve a list of students.
    - **Response**: A JSON array of students.

- **POST /api/students**: Add a new student.
    - **Request Body**: JSON object containing student details. 
    - **Response**: The created student's details.

- **PUT /api/students/:id**: Update a student's information.
    - **Request Body**: JSON object containing updated student details.
    - **Response**: The updated student's details.

- **DELETE /api/students/:id**: Remove a student from the system.
    - **Response**: Confirmation message of deletion.

### Example Response
```json
{
  "message": "Operation successful",
  "data": {...}
}
```