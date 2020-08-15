# Typescript-project-template

A simple template to easily start Node Typescript project

I was basically using this template for myself, but I think it can be used by anyone who wants to start a typescript project without spending 10 years to configure it.<br>
With that template, you can start coding instantly, that's cool no ? :blush:

> Finding new ways to be lazy is probably the most productive thing you've done<br> A developer citation for sure 


## Getting started

Install dependencies, there is nothing more.

```shell script
npm install
```

You can verify if everything is working with `npm test` or `npm start`

## Content

The template integrates some basic tools to develop efficiently

### Linter

It is very important to respect rules when coding. 

I'm using [eslint](https://eslint.org/) with [airbnb rules](https://airbnb.io/javascript/), configure it to fits your needs

Type `npm run lint` to show your error and `npm run lint:fix` to fix simple one.

### Prettier

To separate coding rules and codeStyle, I use a [prettier config](https://prettier.io/). It's a very cool tool to formatting your code like your want 

### Tests

Test his code is essential, template integrated [Jest](https://jestjs.io/en/) test suites with typescript usage.

You can add new tests in the `tests` folder.

Type `npm run test` or `npm run test:watch` to use it.

> Watching more is very useful during test :)

### Dev integration

**Env**

Work with an environment is sometime an obligation, especially when you build API with Docker and some secrets keys ect...<br>
Set and set your config in `.envrc` if you need some variables

**Github**

There is a `.github` folder where you can write your [Github Action](https://github.com/features/actions) and _Github assets_<br>
You can also find `.gitignore`. He's configure for node projects.

**Hooks**

To prevent you from commit / pushing bad code, [husky](https://github.com/typicode/husky) is set to lint, build and run test on a commit.<br>
If your work fails one of those steps, commit will be aborted :angry:

## Maintainer
  - [Vasek - Tom C.](https://github.com/TomChv)
