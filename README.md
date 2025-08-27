# 🏋️ Caveman Lifting

A full-stack fitness tracking application built with React, Express.js, and MongoDB.

## Features

- Track workout sessions and exercises
- View workout history and statistics
- Find nearby gyms using Mapbox integration
- Personal fitness profile management

## Tech Stack

- **Frontend**: React, Chakra UI, React Router
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Deployment**: Docker, Docker Compose

## Quick Start

1. **Clone and setup**

   ```bash
   git clone <your-repo>
   cd CavemanLifting
   cp .env.example .env
   ```

2. **Add your Mapbox API key**

   ```bash
   # Edit .env file and add your API key
   REACT_APP_API_KEY=your_mapbox_api_key_here
   ```

3. **Run with Docker**

   ```bash
   docker-compose up --build
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - API: http://localhost:3001

## API Key Setup

This app uses Mapbox for gym location features:

1. Sign up at [mapbox.com](https://www.mapbox.com)
2. Get your free API key from the dashboard
3. Add it to your `.env` file as `REACT_APP_API_KEY`

## Development

The application runs in development mode with hot reloading enabled.

- React dev server on port 3000
- Express API on port 3001
- MongoDB on port 27017

## Commands

```bash
# Start application
docker-compose up

# Stop application
docker-compose down

# View logs
docker-compose logs -f

# Clean restart (removes database data)
docker-compose down -v && docker-compose up --build
```

---

_Built as a learning project to explore full-stack development with React and Express._
