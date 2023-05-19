# Deployed project (Live site) : 
https://prac-project.netlify.app/

# prac-project

The project consits of two different assignments each such that the first one being react application to play video and record the facial expression in real time and the second one being a simple form connected to Firebase/Firestore database at the backend.

## Facial expression recognition ![Screenshot (287)](https://github.com/Rahil2892/prac-project/assets/80545477/a9f03ab3-4fd1-4ecc-9453-ad6d36453fb0)



The 1st part is built using face-api.js as the main library which completely takes care of face detection to facial expression recognition in real time. The page comprises of 2 major parts :

### video playing 

In this part a video is been played with the help of player component of video-react library 

### Emotion detection

Here the live video image of the user is been displayed and the expressions are captured with the help of face-api.js and an extra feature of emotes is provided with the help of react-emoji-render library so that the user can show active participation. This section also has the button that directs to the 2nd part of the project i.e. a simple-form

## User Form![Screenshot (280)](https://user-images.githubusercontent.com/80545477/235303212-55c5adff-e5f8-4f75-bc7a-50e54e28c9bc.png)


This part consist of a simple-form that has 2 input fields i.e. name and email, that fetch the users entry and the submit button that send the data at the backend and all the entries are rendered below the submit button. The form is built using basic tailwindCSS and it is connected to Firestore database at the backend. Also there is a button that redirects to the 1st part. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
