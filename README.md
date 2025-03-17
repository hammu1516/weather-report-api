# weather-report-api
The Weather Report API is a Node.js application that stores users' emails and locations, fetches weather data for their locations, and sends hourly weather reports every 3 hours. It uses MongoDB for data storage, the OpenWeatherMap API for weather data, and Nodemailer for sending emails

## features
1. User Management
   - create a new user with an email and location
   - Update a user's location

2. Weather Data
   - fetch weather data for a user's location
   - store weather data with date and time
     
3. Email notification
   - Send hourly weather reports to users every 3 hours
    
4. Validation
  - Validate user input using `express-validator`

## Technologies Used

1. Backend
  - Node.js
  - Express.js
  - Mongoose
2. Database
  - MongoDB 
3. APIs:
  - OpenWeatherMap API (for weather data)
  - Google Geocoding API (for city name from coordinates)
4. Email
  - Nodemailer (for sending emails)
5. Validation:
  - `express-validator`
6. Deployment:
  - Vercel

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (Node Package Manager)
- MongoDB (or access to a MongoDB instance)
- An OpenWeatherMap API key
- A Google API key (for Geocoding)
- A Gmail account (for Nodemailer)

## Setup Instructions

1. Clone the Repository
git clone https://github.com/your-username/weather-report-api.git
cd weather-report-api

2. Install Dependencies
npm install

4. Set Up Environment Variables
Create a .env file in the root directory and add the following variables:

env
MONGODB_URI=mongodb+srv://new_user:hamu1516@cluster0.sbscx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
OPENWEATHER_API_KEY=your_openweather_api_key
GOOGLE_API_KEY=your_google_api_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

4. Run the Application
Start the server:
node server.js
The server will start on http://localhost:3000.

API Endpoints
1. User Management
Create a User:
POST /api/users
Request Body:
{
    "email": "test@example.com",
    "latitude": 40.7128,
    "longitude": -74.0060
}

Update User Location:
PUT /api/users/:email/location
Request Body:
{
    "latitude": 34.0522,
    "longitude": -118.2437
}

2. Weather Data
Get Weather Data:
GET /api/users/:email/weather

3. Authentication
## Register a User:
POST /api/auth/register
Request Body:
{
    "email": "test@example.com",
    "password": "password123",
    "latitude": 40.7128,
    "longitude": -74.0060
}

## Login a User:
POST /api/auth/login
Request Body:
{
    "email": "test@example.com",
    "password": "password123"
}

## Testing the API
You can test the API using Postman. Import the provided Postman collection:
Download the Postman collection: Weather-Report-API.postman_collection.json.
Import the collection into Postman.
Test the endpoints as described above.

## Deployment
Deploy on Vercel
Install Vercel CLI:
npm install -g vercel

Deploy the application:
vercel
