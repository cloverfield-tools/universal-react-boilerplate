# Universal React Boilerplate

[![Dependency Status](https://david-dm.org/cloverfield-tools/universal-react-boilerplate.svg)](https://david-dm.org/cloverfield-tools/universal-react-boilerplate)
[![devDependency Status](https://david-dm.org/cloverfield-tools/universal-react-boilerplate/dev-status.svg)](https://david-dm.org/cloverfield-tools/universal-react-boilerplate#info=devDependencies)
[![Travis-CI](https://travis-ci.org/cloverfield-tools/universal-react-boilerplate.svg?branch=master)](https://travis-ci.org/cloverfield-tools/universal-react-boilerplate)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/learn-javascript-courses/javascript-questions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

A simple boilerplate Node app featuring:

* Universal JavaScript. *Routing & Rendering with shared components, shared store, & shared routes.*
* State managed by Redux.
* Standard ES6 modules using Babel + webpack.
* React + JSX + ES7 object spread via Babel.
* Express 4.x.
* Useful scripts and conventions for app development.


## Learn JavaScript with Eric Elliott

The Universal React Boilerplate was written for the ["Learn JavaScript with Eric Elliott" courses](https://ericelliottjs.com/). A series of courses to teach people how to build great JavaScript apps for production. Don't just learn JavaScript. Learn how to build amazing things.

## Status

### ES6 updates

Rewritten from the ground up for ES6 + React with Babel and webpack.

### React

Useful to get a working starting point. Still exploratory and evolving. Needs production hardening. If you use this in a production app, please contribute your production tweaks back so we can all benefit.

Our next big challenge is to encapsulate universal route, render, and store config into its own library module, which would radically simplify the process of building your apps using this boilerplate.


## Getting Started

We're using an ES6 template string for the page skeleton + React to render the actual UI into the `root` div.

The React render happens on both the server and the client using shared code. React components are written in class-free style using [pure components](https://github.com/ericelliott/react-pure-component-starter) wherever possible.


```
npm install
npm run build:dev
npm start
```

Now the app should be running at http://0.0.0.0:3000/

## Universal JavaScript

Universal JavaScript (aka *"isomorphic JavaScript"*) means that it's designed to run a lot of the same code on both the client and the server. Typically that includes a lot of rendering and domain logic.

There are many advantages to building apps this way, but the primary advantages are:

* **Cross-functional teams.** Since everything is written in JavaScript, it's easier to build teams who know how to work on both the client and server sides of the app.
* **Write once, run everywhere.** With the exception of a few library substitutions and browser polyfills, the code is shared, which means you have to write about half the code you'd write working on a non-universal app.
* **More productive developers.** Since the app is more consistent across the stack, there's no context switching when you need to maintain application behavior on both sides of the stack. Write the behavior once, and you're done. Context switching slows developers down significantly.


## Tech stack

Take a look at the [Roadmap](https://github.com/cloverfield-tools/universal-react-boilerplate/issues/4) for an idea of where this is going. Help is welcome and encouraged! =)

The universal boilerplate uses standard JavaScript modules to author all of the code. All open-source modules are sourced from `npm`.


**Why not use Bower and AMD?** Lots of reasons:

* `npm` has 5x more modules than Bower, 60% of which are browser compatible, and `npm` is growing faster than Bower. In fact, `npm` is the largest package repository available for any programming language.
* Webpack and browserify let you bundle standard ES6 style modules for the browser.
* Typical Node applications are not written using AMD modules or Bower, so sharing code becomes more complicated when you author with AMD.
* Bower modules frequently assume they're running in a browser environment and do things that don't make any sense in the server environment.
* Typical AMD apps default to asynchronously loading all the modules. That's bad for performance. See below.
* 2010 called. They want you to know that AMD was always intended to be a temporary hack until something better came along. Something better has come along. Welcome to the universal future. ;)


### The problem with AMD's async loading default

Asynchronously loading all your modules by default is really bad for application start up performance because all those requests create latency queues which can be really painful on mobile devices. HTTP2 / SPDY are changing that in modern browsers, but people often use their mobile devices for years without upgrading the browsers on them. I recommend bundling all your commonly used behavior (including templates and CSS) into a single, compressed JavaScript file in order to minimize request latency.

I know that AMD supports bundling with tools like `r.js`, but many apps start out without bundling and *never bother to fix it later.* I've personally been on three different app projects where bundling was postponed for a year or more, all the while making customers wait. I knew this was bad, and I tried to get it fixed, but on a large enterprise app project, getting something like that changed mid-project takes klout, political maneuvering, and buy-in from teams who may never have met you and could be wondering why you're creating work for them when they're already behind schedule.

In my experience, every team is always behind schedule if you ask them to do work they weren't planning well ahead of time. ;)


## What's inside?

There are some concerns that legitimately belong only on the server, or only on the client, so there are `client/` and `server/` directories for code that is specific to one or the other. Shared code goes in `shared/`:

* `source/shared`    - Shared code.
* `source/client` - For browser-only code.
* `source/server` - For server-only code.


## Index

The `server/index` route serves dynamic content. Static assets are served from the `build` folder using `express.static`.


## Scripts

Some of these scripts may require a Unix/Linux environment. OS X and Linux come with appropriate terminals ready to roll. On Windows, you'll need git installed, which comes with Git Bash. That should work. If you have any trouble, please [report the issue](https://github.com/cloverfield-tools/universal-react-boilerplate/issues/new).

The `package.json` file comes with the following scripts that you may find useful:

* `npm start` runs a client-only devserver
* `npm run build` rebuilds the client
* `npm run watch` runs a dev console that reports lint and unit test errors on save
* `npm run server` runs the actual server process

To run a script, open the terminal, navigate to the boilerplate directory, and type:

```
npm run <name of script>
```


### Start

Start the dev server.

You can optionally leave `run` out of the `start` and `test` script invocations, so these are equivalent:

```
npm run start
npm start
```

##
Log messages will be written to the console (stdout) in JSON format for convenient queries using tools like [Splunk](http://www.splunk.com/). You should be able to pipe the output to a third party logging service for aggregation without including that log aggregation logic in the app itself.


### Developer feedback console:

```
npm run watch
```

The dev console does the following:

* Checks for syntax errors with `eslint` using idiomatic settings from `.eslintrc`
* Runs the unit tests and reports any test failures.
* Watches for file changes and re-runs the whole process.

## Requiring modules

To require modules relative to the app root, just put them in `source` and require them just like you would require a module installed by npm. For example, if you had a file called `source/routes/index.js` you can require it with:

```
import routes from 'routes';
```

This is a lot cleaner than using relative paths and littering your code with stuff like `../../../module/path/module.js`.

This requires the `NODE_PATH` environment variable to be set to `source`. For example from the `package.json`:

```js
  scripts: {
    "server": "NODE_PATH=source babel-node source/server/index.js",
    "test": "NODE_PATH=source babel-node source/test/index.js",
  }
```

We also need to tell webpack configs (located in the project root) about the source path:

```js
  resolve: {
    root: __dirname + '/source'
  }
```

### Why?

* You can move things around more easily.
* Every file documents your app's directory structure for you. You'll know exactly where to look for things.
* Dazzle your coworkers.

If you find yourself using the same file in a lot of modules, it's probably a better idea to split it out into its own module -- preferably open source. Then you can just install it like any other module so it can live in `node_modules`.


<a href="https://ericelliottjs.com"><img width="1200" alt="Learn JavaScript with Eric Elliott" src="https://cloud.githubusercontent.com/assets/364727/8640836/76d86618-28c3-11e5-8b6e-27d9cd72180e.png"></a>

Created for & Sponsored by "Learn JavaScript with Eric Elliott", an online course series for application builders. Ready to jump in? [Learn more](https://ericelliottjs.com/).
