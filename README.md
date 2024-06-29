# U-Future Test Task

## Overview

U-Future Test Task is a simple React-based user management app. It allows users to view a list of users, add new users, and delete existing users. The app also features pagination to navigate through the user list.

## Features

- View a list of users
- Add new users
- Delete users
- Pagination for user navigation

## Technologies Used

- React
- Redux
- TypeScript
- CSS Modules
- JSONPlaceholder API

## API Used

This application uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) API to fetch the list of users.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/alikzilla/ustudyTestTask.git
   cd ustudyTestTask
   ```

2. **Install dependencies:**

   Using npm:

   ```sh
   npm install
   ```

   Using yarn:

   ```sh
   yarn install
   ```

3. **Run the application:**

   Using npm:

   ```sh
   npm start
   ```

   Using yarn:

   ```sh
   yarn start
   ```

   This will start the development server and open the application in your default browser.

### Build

To create a production build of the application:

Using npm:

```sh
npm run build
```

Using yarn:

```sh
yarn build
```

The build output will be located in the `build` directory.

## Deployment

You can deploy the application using GitHub Pages. First, install the `gh-pages` package:

Using npm:

```sh
npm install gh-pages --save-dev
```

Using yarn:

```sh
yarn add gh-pages --dev
```

Then add the following scripts to your `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy the application:

Using npm:

```sh
npm run deploy
```

Using yarn:

```sh
yarn deploy
```

The application is deployed at [https://alikzilla.github.io/ustudyTestTask/](https://alikzilla.github.io/ustudyTestTask/).

## Demonstration

Here is a brief overview of how the application works:

1. **Viewing Users:** Upon launching the app, you'll see a list of users fetched from the JSONPlaceholder API. Users are displayed with their name, address, email, and phone number.

2. **Adding Users:** Click on the "Add User" button in the header to open a popup form. Fill in the user's details and submit to add a new user to the list.

3. **Deleting Users:** Each user card has a "Delete" button. Click on it to remove the user from the list.

4. **Pagination:** Use the "Previous" and "Next" buttons at the bottom of the user list to navigate between pages.
