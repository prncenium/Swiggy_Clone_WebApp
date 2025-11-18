🍔 React Swiggy Clone

A feature-rich frontend application built with React, cloning the core user experience of Swiggy. This app allows users to browse restaurants, search for food, manage their cart, and use a real authentication flow.

✨ Features

🍽️ Restaurant & Food Browsing

Live API Data: Fetches and displays a list of restaurants from Swiggy's live API (via a proxy).

Search Functionality: Instantly search for restaurants by name from the main body.

Navbar Search: Click the "Search" icon in the navbar to automatically focus the search input.

Top Rated Filter: Filter restaurants to see only those with a high rating (e.g., 4.0+).

Dynamic Hero Section: A beautiful, custom hero banner on the homepage.

Loading UI: Displays a "Loading..." message while fetching data.

🔐 Authentication & Cart

User Signup & Login: Secure authentication using Firebase (Email/Password).

State Management: App-wide state (like user auth and cart) managed with Redux Toolkit.

Dynamic Cart: Add items to the cart, and see the navbar cart count update in real-time.

Routing: Uses React Router DOM v6 for all page navigation.

Static Pages: Includes routes for a "Help" page and a "Cart" summary page.

🛠️ Tech Stack

Frontend: React, Vite

Styling: Tailwind CSS

State Management: Redux Toolkit

Routing: React Router DOM v6

Backend-as-a-Service: Firebase Authentication

Icons: Lucide React

🚀 Getting Started

Follow these instructions to get a copy of the project running on your local machine.

Prerequisites

You must have Node.js and npm (or yarn) installed.

You need to create a free Firebase project to get your own API keys.

1. Clone the Repository

git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME


2. Install Dependencies

npm install


3. Set Up Environment Variables

This project uses Firebase for authentication. Your firebase.js file needs API keys to connect to your project.

Create a file named .env in the root of the project and add your Firebase project keys:

VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here


4. Update firebase.js

You must update your firebase.js file to read from these .env variables.

Change your firebase.js from this:

const firebaseConfig = {
  apiKey: "YOUR_HARDCODED_KEY",
  // ... other keys
};


To this:

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};


5. Set Up the Vite Proxy

To fetch data from Swiggy's API without CORS errors, we use a proxy. Make sure your vite.config.js file has this server block:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/dapi': {
        target: '[https://www.swiggy.com](https://www.swiggy.com)',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})


6. Run the Project

Start the local development server:

npm run dev


Open http://localhost:5173 (or whatever port your terminal shows) to see the app!
