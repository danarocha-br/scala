# Skala


## TurboRepo

To run all packages in parallel:

```javascript
// root directory
yarn dev
```

To build all packages:

```javascript
// root directory
yarn build
```

---

## React Lib
Runs on node 16.16.0

### Adding new components

1. `cd packages/react`
2. `yarn dev` (in case you are not running the script from the root directory)
3. `yarn generator` (this will generate a base template for the component and for storybook story)
4. Add the component to the `index.js` in the react package
