# Advanced React To-Do App with Weather and User Authentication

This is a feature-rich React-based To-Do application that combines task management, user authentication, and weather integration into one responsive and user-friendly platform. The app is built using React, Redux for state management, and Tailwind CSS for styling. 

## Key Features

### 1. **User Authentication**
- Simple mock login/logout functionality with username as "admin" and password as "password".
- Tasks are accessible only after user login.

### 2. **Task Management**
- Add, edit, delete, and prioritize tasks (High, Medium, Low).
- Mark tasks as important for quick access.
- Persistent task storage using localStorage.

### 3. **Weather Integration**
- Displays current weather for a default city (Delhi).
- Allows users to search and view weather for other cities.

### 4. **Responsive Design**
- Fully responsive layout for mobile, tablet, and desktop devices.
- Built using Tailwind CSS with a mobile-first approach.

### 5. **State Management**
- Utilizes Redux for global state management.
- Includes Redux Thunk for asynchronous API calls.

## Tech Stack
- **Frontend**: React.js with functional components and hooks.
- **State Management**: Redux + Redux Thunk.
- **Styling**: Tailwind CSS.
- **API Integration**: OpenWeatherMap API for weather data.
- **Storage**: localStorage for data persistence.

## Installation
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/react-advanced-todo-app.git
   cd react-advanced-todo-app
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the development server:  
   ```bash
   npm start
   ```

## API Key Setup
To use the weather feature, create a `.env` file in the root directory and add your OpenWeatherMap API key:  
```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

## Future Enhancements
- Integration with a backend for real authentication.
- Task categorization by projects.
- Support for due dates and reminders.
