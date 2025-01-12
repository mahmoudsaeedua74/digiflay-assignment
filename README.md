# Frontend-Assessment

## Description

This project is a **Next.js-based Frontend-Assessment website** with Redux for state management. It includes features like a dynamic navbar, language switching, result tables, and customizable parts for your website content. It is designed to display a wide range of products, allow adding user information to a table, integrate a map, and provide a text editor.

### Language Switching
The project supports both Arabic and English. You can toggle the language from the navbar. The language will persist across page reloads using `next-intl`.

### Redux Integration
The project uses Redux to manage global state. You can add or modify the store, actions, and reducers within the `/store` folder. To interact with the Redux state, use the `useAppSelector` and `useRootDispatch` custom hooks.

## Components
- **Navbar**: The navigation bar has links to the home, categories, contact, and about pages. It also supports language switching.
- **ResultsTable**: Displays user data in a table format. This component pulls data from the Redux store.
- **PartDescription**: A customizable part of the page where you can add sections like titles and content.
- **Map Component**: Uses `leaflet` to render interactive maps. You can add location-based features to your website.
- **Text Editor**: A customizable text editor to add or modify content dynamically.

## Features
- **Navbar**: A responsive navigation bar with language switching (Arabic/English).
- **UsersInfo Listings**: Display of users' information with sorting and filtering options.
- **Redux State Management**: Redux is used to manage the state of the application, such as user information and the app's global state.
- **Results Table**: Displays user data (e.g., name, phone, email) in a tabular format.
- **Map Integration**: Interactive maps to display location data or other relevant geographic information.
- **Text Editor**: Allows users to edit content directly within the application, enhancing flexibility.
- **Responsive Design**: The website is fully responsive, adapting to both mobile and desktop screen sizes.
- **Form Handling with Formik**: Simplified form handling, validation, and submission with Formik and Yup.

## Technologies Used
- **React**: Frontend framework used to build the components and structure of the website.
- **Redux**: For state management across components.
- **Next.js**: Framework used for server-side rendering and routing.
- **Next-Intl**: For internationalization and localization (supports Arabic and English).
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Formik**: A library for handling forms, form validation, and submission.
- **Leaflet**: A leading open-source JavaScript library for embedding interactive maps.
- **Yup**: A JavaScript schema builder for value parsing and validation, often used with Formik.

## Setup
### Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed (preferably v14 or above).
- A code editor such as [VSCode](https://code.visualstudio.com/).

### Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/e-commerce-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd digiflay-assignment
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the browser and navigate to `http://localhost:3000` to see the project in action.


## Contributing
We welcome contributions to this project. If you'd like to improve or add new features, please fork the repository, create a branch, and submit a pull request.
