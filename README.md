# Commit List Mobile App
A simple mobile application to look at commits of a given repository. This application is developed using React Native.

## Setup
This project is bootstrapped using [Create React Native App](https://github.com/react-community/create-react-native-app).

- Make sure you have Node installed. For other necessary tools, you may refer to the [React Native documentation](https://reactnative.dev/docs/environment-setup).
- After cloning the repository to a directory, enter `npm install` in your Terminal from the directory to install related packages.
- To run the application, enter `npx react-native run-android` or `npx react-native run-ios`, depending on your phone or emulator.

## Features
- Log in page to enter username.
- Password page to enter password.
- Profile page, with user's username and profile picture shown on screen.
- Commit list for given repository with author name, profile picture, commit date, commit message, and committer displayed on list.

## App Testing
- Once the user starts the application, the user should be greeted with a Log In page to input their username.

<img src="https://i.imgur.com/9OacxWo.jpg" alt="Log In Screen" width="400">

- Next, they must enter their password. The password must **not** be blank **nor** less than 8 characters long.

<img src="https://i.imgur.com/atgPq89.jpg" alt="Password Screen" width="400">

- After logging in, the user is greeted with a Welcome page and also a text input to insert a repository name.
    - If user does not exist, it will return an error message saying "User not found."
    - If an error happened during data fetching, it will return an error message saying "Something went wrong."

<img src="https://i.imgur.com/VzErElr.jpg" alt="User Profile Screen" width="400">

- After entering a repository name, the user will see the list of commits from the given repository.
    - If the repository does not exist, it will return an error message saying "Repository not found."
    - If an error happened during data fetching, it will return an error message saying "Something went wrong."

<img src="https://i.imgur.com/UlPfMG3.jpg" alt="Commit List Screen" width="400">

- The user should **only** be able to go back to the Log In screen from the Profile screen and the Commit List screen using the Logout button.
