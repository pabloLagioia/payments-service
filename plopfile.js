module.exports = function (plop) {
  // controller generator
  plop.setGenerator("use-case", {
      description: "Create new use case",
      prompts: [{
          type: "input",
          name: "name",
          message: "Use case name please"
      }],
      actions: [{
        type: "add",
        path: "useCases/{{name}}/{{name}}.js",
        templateFile: "templates/useCase.txt",
        skipIfExists: true,
        transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
      }, {
        type: "add",
        path: "useCases/{{name}}/{{name}}.test.js",
        templateFile: "templates/useCaseTest.txt",
        skipIfExists: true,
        transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
      }, {
        type: "add",
        path: "useCases/{{name}}/index.js",
        templateFile: "templates/index.txt",
        skipIfExists: true,
        transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
      }]
  });

  plop.setGenerator("delivery", {
    description: "Create new delivery",
    prompts: [{
        type: "input",
        name: "name",
        message: "Delivery name please"
    }],
    actions: [{
      type: "add",
      path: "api/v1/{{name}}/{{name}}.js",
      templateFile: "templates/delivery.txt",
      skipIfExists: true,
      transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
    }, {
      type: "add",
      path: "api/v1/{{name}}/{{name}}.test.js",
      templateFile: "templates/deliveryTest.txt",
      skipIfExists: true,
      transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
    }, {
      type: "add",
      path: "api/v1/{{name}}/index.js",
      templateFile: "templates/deliveryIndex.txt",
      skipIfExists: true,
      transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
    }]
  });

  plop.setGenerator("feature", {
    description: "Create new feature",
    prompts: [{
        type: "input",
        name: "name",
        message: "Feature name please"
    }],
    actions: [{
      type: "add",
      path: "api/v1/{{name}}/{{name}}.js",
      templateFile: "templates/delivery.txt",
      skipIfExists: true,
      transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
    }, {
      type: "add",
      path: "api/v1/{{name}}/{{name}}.test.js",
      templateFile: "templates/deliveryTest.txt",
      skipIfExists: true,
      transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
    }, {
      type: "add",
      path: "api/v1/{{name}}/index.js",
      templateFile: "templates/deliveryIndex.txt",
      skipIfExists: true,
      transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
    }, {
      type: "add",
      path: "useCases/{{name}}/{{name}}.js",
      templateFile: "templates/useCase.txt",
      skipIfExists: true,
      transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
    }, {
      type: "add",
      path: "useCases/{{name}}/{{name}}.test.js",
      templateFile: "templates/useCaseTest.txt",
      skipIfExists: true,
      transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
    }, {
      type: "add",
      path: "useCases/{{name}}/index.js",
      templateFile: "templates/index.txt",
      skipIfExists: true,
      transform: (template, data) => template.replace(/makeUseCaseName/g, `make${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`).replace(/useCaseName/g, data.name)
    }]
  });

};