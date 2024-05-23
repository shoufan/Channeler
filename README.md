# Channeler

Channeler is a real-time chat application built with Next.js, Firebase, and Chakra UI. It allows users to authenticate using Firebase Authentication and chat in real-time.

## Features

- Real-time messaging with Firebase Firestore
- User authentication with Firebase Authentication
- Responsive design using Chakra UI
- Scrollable chat interface
- Persistent chat data

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/shoufan/Channeler.git
    cd Channeler
    ```

2. Install the dependencies:
    ```
    npm install
    ```

3. Set up Firebase:
    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Add a web app to your Firebase project.
    - Copy the Firebase config object from your Firebase project settings and replace the contents of `firebaseconfig.js` with your configuration.

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Sign in using your email and password.
2. Start a new chat or select an existing chat to start messaging.
3. Messages are stored in Firebase Firestore and are retrieved in real-time.
