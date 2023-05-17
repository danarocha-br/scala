module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../packages/react/src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../packages/react/src/components/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../apps/storybook/src/stories/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/stories.tsx.hbs",
      },
      // {
      //   type: "add",
      //   path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
      //   templateFile: "templates/spec.tsx.hbs",
      // },
    ],
  });
};
