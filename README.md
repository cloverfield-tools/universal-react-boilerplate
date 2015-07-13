# Universal React Boilerplate 

[![Dependency Status](https://david-dm.org/cloverfield-tools/universal-react-boilerplate.svg)](https://david-dm.org/ericelliott/universal-react-boilerplate)
[![devDependency Status](https://david-dm.org/cloverfield-tools/universal-react-boilerplate/dev-status.svg)](https://david-dm.org/ericelliott/universal-react-boilerplate#info=devDependencies)
[![Travis-CI](https://travis-ci.org/cloverfield-tools/universal-react-boilerplate.svg?branch=master)](https://travis-ci.org/ericelliott/universal-react-boilerplate)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/learn-javascript-courses/javascript-questions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

A node app that says, "Hello, world!"

This is a universal JavaScript application boilerplate using Express 4.x and React.


## Learn JavaScript with Eric Elliott

The Universal React Boilerplate was written for the ["Learn JavaScript with Eric Elliott" courses](https://ericelliottjs.com/). A series of courses to teach people how to build great JavaScript apps for production. Don't just learn JavaScript. Learn how to build amazing things.

## Status

### Name Change Underway

This repository began live as the "isomorphic-express-boilerplate". That confused a lot of people, so when Michael Jackson suggested ["Universal JavaScript"](https://medium.com/@mjackson/universal-javascript-4761051b7ae9), I immediately jumped on it. A lot of the issues and documentation still refers to "isomorphic".

### ES6 updates coming

ES6 recently became the official standard, and there Babel is a great way to start using it today, so we'll be updating everything in the repo for Babel / ES6!

### React

Initially we were looking at several different library possibilities, but we settled on React. Now we just need to hook up [react-engine](https://github.com/paypal/react-engine) (by PayPal) to get the universal renders and client bootstrap going.


## Universal JavaScript

Universal (aka *"isomorphic"*) means that it's designed to run a lot of the same code on both the client and the server. Typically that includes a lot of rendering and domain logic.

There are many advantages to building apps this way, but the primary advantages are:

* **Cross-functional teams.** Since everything is written in JavaScript, it's easier to build teams who know how to work on both the client and server sides of the app.
* **Write once, run everywhere.** With the exception of a few library substitutions and browser polyfills, the code is shared, which means you have to write about half the code you'd write working on a non-universal app.
* **More productive developers.** Since the app is more consistent across the stack, there's no context switching when you need to maintain application behavior on both sides of the stack. Write the behavior once, and you're done. Context switching slows developers down significantly.


## Tech stack

Take a look at the [Roadmap](https://github.com/ericelliott/universal-react-boilerplate/issues/4) for an idea of where this is going. Help is welcome and encouraged! =)

### Current status

This is already very valuable as-is. Read on for details.

The universal boilerplate uses standard JavaScript modules to author all of the code. All open-source modules are sourced from `npm`.

**Why not use Bower and AMD?** Lots of reasons:

* `npm` has 5x more modules than Bower, 60% of which are browser compatible, and `npm` is growing faster than Bower. In fact, `npm` is the largest package repository available for any programming language.
* Browserify lets you bundle Node style modules for the browser. It handles dependencies in a way that is compatible with the way that Node does.
* Typical Node applications are not written using AMD modules or Bower, so sharing code becomes more complicated when you author with AMD.
* Bower modules frequently assume they're running in a browser environment and do things that don't make any sense in the server environment.
* Typical AMD apps default to asynchronously loading all the modules. That's bad for performance. See below.
* 2010 called. They want you to know that AMD was always intended to be a temporary hack until something better came along. Something better has come along. Welcome to the universal future. ;)


### The problem with AMD's async loading default

Asynchronously loading all your modules by default is really bad for application start up performance because all those requests create latency queues which can be really painful on mobile devices. HTTP2 / SPDY are changing that in modern browsers, but people often use their mobile devices for years without upgrading the browsers on them. I recommend bundling all your commonly used behavior (including templates and CSS) into a single, compressed JavaScript file in order to minimize request latency.

I know that AMD supports bundling with tools like `r.js`, but many apps start out without bundling and *never bother to fix it later.* I've personally been on three different app projects where bundling was postponed for a year or more, all the while making customers wait. I knew this was bad, and I tried to get it fixed, but on a large enterprise app project, getting something like that changed mid-project takes klout, political maneuvering, and buy-in from teams who may never have met you and could be wondering why you're creating work for them when they're already behind schedule.

In my experience, every team is always behind schedule if you ask them to do work they weren't planning well ahead of time. ;)


## What's inside?

There are some concerns that legitimately belong only on the server, or only on the client, so there are `client/` and `server/` directories for code that is specific to one or the other. Shared code goes in `lib/`:

* `app/node_modules/lib`    - Shared code.
* `app/node_modules/client` - For browser-only code.
* `app/node_modules/server` - For server-only code.

```
.
├── LICENSE
├── README.md
├── app
│   ├── index.js
│   ├── node_modules
│   │   ├── client
│   │   │   └── index.js
│   │   ├── lib
│   │   │   └── app.js
│   │   ├── public
│   │   │   ├── index.html
│   │   │   └── js
│   │   │       └── vendor
│   │   │           └── html5shiv.js
│   │   └── server
│   │       └── index.js
│   └── test
│       ├── functional
│       │   ├── acceptance
│       │   │   └── index.js
│       │   ├── index.js
│       │   └── smoke
│       │       └── index.js
│       └── unit
│           ├── client
│           │   └── index.js
│           ├── index.js
│           └── server
│               └── index.js
├── config
│   └── BUILD
├── node_modules
└── package.json
```


## Index

The index route `/` serves `index.html` from the `public` folder using `express.static`. The index file is a slightly modified version of the [HTML5 Boilerplate](https://html5boilerplate.com/) trusted by Google, Microsoft, NASA, Nike, Barack Obama, etc... To customize it or create your own, visit [Initializr.com](http://initializr.com).


## Scripts

Some of these scripts may require a Unix/Linux environment. OS X and Linux come with appropriate terminals ready to roll. On Windows, you'll need git installed, which comes with Git Bash. That should work. If you have any trouble, please [report the issue]().

The `package.json` file comes with the following scripts that you may find useful:

```
  "scripts": {
    "start": "node index.js",
    "debug": "node --debug index.js",
    "inspect": "node-inspector",
    "test": "node test/unit/index.js | faucet",
    "lint": "jshint .",
    "build": "mkdir -p config && git rev-parse --short HEAD > config/BUILD",
    "watch:build": "watch --wait=5 'npm run lint && npm run build && npm run test' .",
    "dev": "npm run watch:build"
  }
```


To run a script, open the terminal, navigate to the boilerplate directory, and type:

```
npm run <name of script>
```


### Start

Start the app.

```
npm run start
```

`start` and `test` support this shortcut, to save a few keystrokes:

```
npm start
```

Log messages will be written to the console (stdout) in JSON format for convenient queries using tools like [Splunk](http://www.splunk.com/). You should be able to pipe the output to a third party logging service for aggregation without including that log aggregation logic in the app itself.


### Developer feedback console:

```
npm run dev
```


The dev console does the following:

* Checks for syntax errors with `jslint` using idiomatic settings from `.jshintrc`
* Runs a build script which (for now) simply writes the current git commit hash to a file called `config/BUILD`. In a later version, this will also bundle the browser JavaScript.
* Runs the unit tests and reports any test failures.
* Watches for file changes and re-runs the whole process.


## Requiring modules

To require modules relative to the app root, just put them in `app/node_modules` and require them just like you would require a module installed by npm. For example, if you had a file called `app/node_modules/lib/routes.js` you can require it with:

```
var routes = require('lib/routes`);
```

The reason this works is because Node will traverse the parent directories until it finds the `node_modules` directory and use that as the base path for requires. See the [full explanation on StackOverflow](http://stackoverflow.com/questions/10860244/how-to-make-the-require-in-node-js-to-be-always-relative-to-the-root-folder-of-t#answer-24461606).


### Why?

* You can move things around more easily.
* Every file documents your app's directory structure for you. You'll know exactly where to look for things.
* Dazzle your coworkers.

If you find yourself using the same file in a lot of modules, it's probably a better idea to split it out into its own module -- preferably open source. Then you can just install it like any other module so it can live in `node_modules`.

### Recap

* `node_modules` for modules installed by `npm`. That way you won't have to put up with a bunch of vendor noise in version control and pull requests. Just add `node_modules` to your .gitignore file (like it is in this repo).
* `app/node_modules` for your application-level code that doesn't belong in `npm`. This should contain all your business logic and application secret-sauce. You DO want this in version control. See `.gitignore` to learn how to configure it.



<a href="https://ericelliottjs.com"><img width="1200" alt="Learn JavaScript with Eric Elliott" src="https://cloud.githubusercontent.com/assets/364727/8640836/76d86618-28c3-11e5-8b6e-27d9cd72180e.png"></a>

Created for & Sponsored by "Learn JavaScript with Eric Elliott", an online course series for application builders. Ready to jump in? [Learn more](https://ericelliottjs.com/).
