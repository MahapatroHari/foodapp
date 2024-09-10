# React Food App

React Food App is a dynamic food delivery application built with React, Redux, and React Router. It utilizes the Swiggy API to fetch real-time restaurant data based on location coordinates. The app is fully functional, tested with Jest, and styled with Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Features

- **Dynamic Data Fetching:** Fetches real-time restaurant data from the Swiggy API based on location coordinates.
- **State Management:** Utilizes Redux for state management to handle cart operations and user data.
- **Routing:** Implements navigation with React Router for seamless user experience.
- **Loading States:** Uses shimmer effects to indicate loading data.
- **Error Handling:** Displays appropriate error messages for failed data fetching.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Unit Testing:** Includes Jest tests for components and utilities.

## Tech Stack

- **React:** JavaScript library for building user interfaces.
- **Redux:** State management library for handling application state.
- **React Router:** Routing library for navigating between different views.
- **Jest:** Testing framework for unit and integration tests.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Swiggy API:** Fetches real-time restaurant data based on location coordinates.

## Installation

To set up and run the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MahapatroHari/foodapp.git
   cd foodapp
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm start
   ```

   Open `http://localhost:3000` in your browser to see the application in action.

## Usage

- **Development Mode:** Use `npm start` to run the development server with hot reloading.
- **Build for Production:** Use `npm run build` to create an optimized production build.
- **Testing:** Use `npm test` to run Jest tests.

## Testing

1. **Run Unit Tests:**

   ```bash
   npm test
   ```

   This will run all tests located in the `__tests__` directory and any other test files.

2. **Test Coverage:**

   To see test coverage, use:

   ```bash
   npm test -- --coverage
   ```

## Deployment

1. **Build Your Project:**

   ```bash
   npm run build
   ```

2. **Deploy to a Hosting Service:**
   - You can deploy the build output to services like Netlify, Vercel, or GitHub Pages. Follow the deployment instructions provided by your chosen service.

## Folder Structure

```
src/
├── components/             # React components
│   ├── __tests__/          # Jest test files
│   │   ├── contact.test.js
│   │   ├── header.test.js
│   │   └── rescards.test.js
│   ├── mocks/              # Mock data for testing
│   │   └── resDataMock.js
│   ├── AboutUs.js          # About Us page component
│   ├── Body.js             # Main body component
│   ├── CartPage.js         # Cart page component
│   ├── ContactUs.js        # Contact Us page component
│   ├── Error.js            # Error page component
│   ├── Header.js           # Header component
│   ├── ItemList.js         # List of menu items component
│   ├── MenuCategory.js     # Menu categories component
│   ├── MenuShimmer.js      # Shimmer effect component for loading
│   ├── ResCards.js         # Restaurant cards component
│   ├── ResMenu.js          # Restaurant menu component
│   ├── Search.js           # Search component
│   ├── Shimmer.js          # General shimmer effect component
│   └── User.js             # User profile component
├── utils/                  # Utility functions and hooks
│   ├── UserContext.js      # User context for state management
│   ├── appStore.js         # Redux store configuration
│   ├── cartSlice.js        # Redux slice for cart
│   ├── constants.js        # Application constants
│   ├── useFetchMenu.js     # Hook for fetching menu data
│   ├── useFetchRes.js      # Hook for fetching restaurant data
│   └── useOnlineStatus.js  # Hook for checking online status
├── App.js                  # Main App component
├── .gitignore              # Git ignore file
├── .parcelrc               # Parcel configuration file (if using Parcel)
├── .postcssrc              # PostCSS configuration file
├── Index.css               # Global styles
├── README.md               # This README file
├── babel.config.js         # Babel configuration file
├── index.html              # Main HTML file
├── jest.config.js          # Jest configuration file
├── noImg.jpg               # Placeholder image
├── package-lock.json       # Lock file for npm
├── package.json            # Project metadata and dependencies
├── tailwind.config.js      # Tailwind CSS configuration file
```

## Contributing

Feel free to open issues or submit pull requests if you find bugs or want to contribute to the project. 

1. **Fork the Repository**
2. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m "Add feature"
   ```

4. **Push to Your Fork:**

   ```bash
   git push origin feature/your-feature
   ```

5. **Submit a Pull Request**



---

