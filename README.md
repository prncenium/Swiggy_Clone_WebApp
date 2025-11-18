# 🍔 React Swiggy Clone

A feature-rich frontend application built with React, cloning the core user experience of Swiggy. This app allows users to browse restaurants, search for food, manage their cart, and use a real authentication flow.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

## ✨ Features

### 🍽️ Restaurant & Food Browsing
* **Live API Data:** Fetches and displays a list of restaurants from Swiggy's live API (via a proxy).
* **Search Functionality:** Instantly search for restaurants by name from the main body.
* **Navbar Search:** Click the "Search" icon in the navbar to automatically focus the search input.
* **Top Rated Filter:** Filter restaurants to see only those with a high rating (e.g., 4.0+).
* **Dynamic Hero Section:** A beautiful, custom hero banner on the homepage.
* **Loading UI:** Displays a "Loading..." message while fetching data.

### 🔐 Authentication & Cart
* **User Signup & Login:** Secure authentication using Firebase (Email/Password).
* **State Management:** App-wide state (like user auth and cart) managed with Redux Toolkit.
* **Dynamic Cart:** Add items to the cart, and see the navbar cart count update in real-time.
* **Routing:** Uses React Router DOM v6 for all page navigation.
* **Static Pages:** Includes routes for a "Help" page and a "Cart" summary page.

## 🛠️ Tech Stack

* **Frontend:** React, Vite
* **Styling:** Tailwind CSS
* **State Management:** Redux Toolkit
* **Routing:** React Router DOM v6
* **Backend-as-a-Service:** Firebase Authentication
* **Icons:** Lucide React

## 🚀 Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites
* You must have Node.js and npm (or yarn) installed.
* You need to create a free Firebase project to get your own API keys.

### 1. Clone the Repository
```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd my-react-app
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Set Up Environment Variables
This project uses Firebase for authentication. Your firebase.js file needs API keys to connect to your project.

Create a file named .env in the root of the project and add your Firebase project keys:
```bash
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```
### 4. Run the Project
Start the local development server:

```bash
npm run dev
```
