# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### Application Architecture:
**Component & Data Organization:**

This application has a very simple design structure. The App.js file contains RecipeList, a list of all the recipe items and their information. This information is passed into a FilterList component (from FilterList.js).
FilterList.js includes the methods for filtering and sorting the RecipeList. FilterList.js instantiates a NavBar component (from NavBar.js), which displays the react-bootstrap navigation bars. The recipe items themselves are laid out in the DisplayItem component (from DisplayItem.js) and displayed in the DisplayList component (from DisplayList.js). Filter.js instantiates this DisplayList component. Filter.js also includes the methods for aggregating items in the DisplayMenu component, which it instantiates from DisplayMenu.js. When users add items to the menu, the list of added items is passed to DisplayMenu component. 

**User Interactions and States:**

Updates caused by user interactions (using the filtering or sorting methods OR adding/removing recipes from menu) are kept track of in states. 

The "add to menu" button is a React button component in DisplayItem. When the user presses the button, it triggers an update of its own state (onOff), which keeps track of whether the item is pressed (added to menu) or not pressed (not on menu). It also triggers the calling of a parent method (removeTime or addTime), which updates the aggregate cook times of menu items in the FilteredList component. The FilteredList component keeps track of the menu cook time in a state called totaltime. 

The navigation bars (both filtering and sorting) are react-bootstrap NavBar components in NavBar.js. When pressed, they call parent functions from FilteredList. FilteredList then handles the appropriate sorting/filtering of the RecipeList. It does so by changing its states to match what was selected in the navigation bar. For this functionality, FilteredList has states: 
1) type-- which corresponds to "Breakfast", "Dinner", "Dessert", or "Any"
2) difficultlevel-- which corresponds to "Easy", "Medium", "Hard", or "Any"
3) sort-- which corresponds to "None", "Asc" (Low to High), "Dsc" (High to Low)
