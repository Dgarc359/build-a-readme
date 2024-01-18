This example project builds and deploys a npm.js package called 'build-a-readme'. This repository is a nice template to jump start an npm project combined with github actions.

> Your github actions will more than likely fail until you change the package name in your `package.json`

# Usage

The github action in this project is designed to create a release on github and
publish an artifact on npm when a new tag is pushed.
For that reason, the current workflow is to line up your tag with your package.json version

With this repository, you should target main to be your 'release'
pipeline. If you want to modify which branch releases to npm,
modify the publish-to-npmjs.yaml file.


# Example Project Development guide
this dev guide is for the example project

Link your local version to a dummy client for testing
```bash
# in build-a-readme/
npm link

# in a dummy consumer project
npm link build-a-readme
```
