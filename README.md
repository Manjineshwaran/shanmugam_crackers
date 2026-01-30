# Shanmugam Crackers

React app for Shanmugam Crackers – price list and ordering (mobile-first).

## Host on GitHub

### 1. One-time setup

1. **Install the deploy dependency** (if not already installed):
   ```bash
   npm install
   ```

2. **Set your GitHub Pages URL**  
   In `package.json`, replace `yourusername` in the `homepage` field with your GitHub username:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/shanmugam_crackers"
   ```
   *(Use the same repo name as on GitHub, e.g. `shanmugam_crackers`.)*

### 2. Push code to GitHub

1. **Create a new repository** on [GitHub](https://github.com/new):
   - Name: `shanmugam_crackers` (or any name you prefer)
   - Do **not** add a README, .gitignore, or license (project already has them)

2. **From your project folder**, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Shanmugam Crackers"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/shanmugam_crackers.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` and `shanmugam_crackers` with your GitHub username and repo name.

### 3. Enable GitHub Pages and deploy

1. On GitHub: **Settings** → **Pages** → under **Source** choose **Deploy from a branch**.
2. Branch: **gh-pages** (or select it after first deploy), folder **/ (root)** → **Save**.
3. **Deploy the site** from your machine:
   ```bash
   npm run deploy
   ```
   This builds the app and pushes the `build` folder to the `gh-pages` branch.

4. After a minute or two, the site will be live at:
   **https://YOUR_USERNAME.github.io/shanmugam_crackers**

### Later updates

- Push code: `git add .` → `git commit -m "Your message"` → `git push`
- Update live site: run `npm run deploy` again

---

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
