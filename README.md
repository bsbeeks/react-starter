## Dependencies
- [Node & NPM](https://docs.npmjs.com/getting-started/installing-node)
- [AWS Command Line Interface](https://aws.amazon.com/cli/)

## Setup
- Clone the repo
- Install [npm dependencies](blob/master/package.json#L14-L41): `npm install`

## Local Development
- Complete "Setup" step above
- Start webpack: `npm run webpack`. This will do the following:
  - Run `app/` through the eslint rules
  - Compile `app/` into a single "bundle" file located in `public/js/`
  - Generate an `index.html` file into `public/` using the template found [here](blob/master/index_template.ejs)
  - Watch `app/` and re-run webpack if any changes are detected
- Open a new terminal window and start a local server: `npm start`. This will do the following:
  - Start up a node server on `https://localhost:4200`
  - Open a new browser window
  - Watch `public/` and reload the page if any changes are detected
- You can now view/test the app