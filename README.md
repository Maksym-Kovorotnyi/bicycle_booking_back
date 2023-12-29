Bicycles booking (server)

This project is a bicycle rental system developed with Nest.js and MongoDB using Mongoose. It provides APIs for managing bicycles, including creation, retrieval, update, and deletion.

Make sure you have the following installed before running the project:

- Node.js
- npm (Node Package Manager)
- MongoDB

Getting Started

1. Clone the repository:
   git clone https://github.com/Maksym-Kovorotnyi/bicycle_booking_back
   cd bicycle_booking_back

2. Install dependencies:
   npm install
   Update the `.env` file with your MongoDB connection string and any other configuration if needed.

3. Run the application:

   npm run start:dev

   The application will be running on `http://localhost:3000` by default.

## API Endpoints

- `GET /bicycles`: Get a list of all bicycles.
- `POST /bicycles`: Create a new bicycle.
- `PATCH /bicycles/:id`: Update the status of a bicycle.
- `DELETE /bicycles/:id`: Delete a bicycle.
