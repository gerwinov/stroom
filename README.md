# STROOM Amsterdam

STROOM Amsterdam website repo.

To get started:

1. Clone the repository:

   ```bash
   git clone https://github.com/gerwinov/stroom.git stroom

   cd stroom
   ```

2. Install the dependencies:

   ```bash
   # Using npm
   npm install

   # Using Yarn
   yarn
   ```

3. Start the development server:

   ```bash
   # Using npm
   npm run serve

   # Using Yarn
   yarn serve
   ```

   Now you should be able to see the project running at localhost:8080.

4. Open `public/index.html` in your editor and start working!

## Building for production

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run production

# Using Yarn
yarn production
```

After that's done, check out `./public/build/tailwind.css` to see the optimized output.

## Deployment

We use Github Pages to host the first version of this website. To deploy a new version run the following command after building for production:

```bash
# Using npm
npm run deploy

# Using Yarn
yarn deploy
```
