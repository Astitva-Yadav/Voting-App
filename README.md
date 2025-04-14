# Real-time Voting App

A real-time voting application built with React and Appwrite. Users can vote on questions and see live results instantly through real-time updates.

## Features

- Real-time vote updates using Appwrite subscriptions
- Clean and responsive UI with Tailwind CSS
- Multiple choice voting system
- Live percentage calculations
- Vote count tracking

## Tech Stack

- React
- Vite
- [Appwrite](https://appwrite.io) for backend services
- Tailwind CSS for styling

## Prerequisites

- Node.js (v16 or higher)
- NPM or Yarn
- Appwrite account

## Project Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-react-app
```

2. Install dependencies:
```bash
npm install
```

3. Configure Appwrite:
   - Create an Appwrite project
   - Set up a database with a collection
   - Update the following in `src/lib/appwrite.js`:
     ```javascript
     const DB_ID = "your-database-id";
     const COLLECTION_ID = "your-collection-id";
     client.setProject("your-project-id");
     ```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
my-react-app/
├── src/
│   ├── components/
│   │   ├── Question.jsx    # Question component with voting logic
│   │   └── Vote.jsx       # Individual vote option component
│   ├── lib/
│   │   └── appwrite.js    # Appwrite client configuration
│   ├── App.jsx            # Main application component
│   └── index.css          # Global styles and Tailwind directives
```

## Database Schema

Your Appwrite collection should have these fields:

| Field Name | Type   | Description           |
|------------|--------|-----------------------|
| text       | string | Question text         |
| answer1    | string | First option         |
| answer2    | string | Second option        |
| answer3    | string | Third option         |
| vote1      | number | Votes for option 1   |
| vote2      | number | Votes for option 2   |
| vote3      | number | Votes for option 3   |

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Building for Production

Create a production build:
```bash
npm run build
```

The build will be available in the `dist` directory.

