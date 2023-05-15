# Skala


## TurboRepo

To run all packages in parallel:

```javascript
// root directory
npm run dev
```

To build all packages:

```javascript
// root directory
npm run build
```

---

## React Lib
Runs on node 16.16.0

### Adding new components

1. `cd packages/react`
2. `npm run dev` (in case you are not running the script from the root directory)
3. `npm run generator` (this will generate a base template for the component and for storybook story)
4. Add the component to the `index.js` in the react package
