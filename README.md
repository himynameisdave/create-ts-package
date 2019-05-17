<div align="center" margin="0 auto 20px">
    <h1>create-ts-package</h1>
    <p style="font-style: italic;">📦 Setup a modern Typescript package with one command.</p>
    <!-- <div>
        <a href='https://travis-ci.org/himynameisdave/browser-event-utils'>
            <img src="https://api.travis-ci.org/himynameisdave/browser-event-utils.svg?branch=master" alt="Travis Badge" />
        </a>
        <a href='https://coveralls.io/github/himynameisdave/browser-event-utils?branch=master'>
            <img src='https://coveralls.io/repos/github/himynameisdave/browser-event-utils/badge.svg?branch=master' alt='Coverage Status' />
        </a>
        <a href="https://bundlephobia.com/result?p=browser-event-utils">
            <img src="https://img.shields.io/bundlephobia/min/browser-event-utils.svg" alt="Bundle size (minified)" />
        </a>
        <a href="https://www.npmjs.com/package/browser-event-utils">
            <img src="https://img.shields.io/npm/dt/browser-event-utils.svg" alt="Downloads">
        </a>
    </div> -->
</div>

---

Generator for a modern JS package written in Typescript, ready to be published to `npm` and distributed to `unpkg`. Meant to be easy-to-use like `create-react-app`. Fairly opinionated, here are some of the features:

- Babel + Typescript
- Rollup for building ES Modules + CommonJS + UMD/Browser bundles
- Jest for unit tests
- Type Definitions
- Sourcemaps
- (Optional) ESLint (w/Typescript support)
- (Optional) TravisCI + Coveralls
- (Optional) Yarn


### Installation

```
npm i -g @himynameisdave/create-ts-package
```

### Usage

```
create-ts-package new-package

ctpkg new-package
```


### Contributing

Issues are welcome, PRs are super welcome. 👍

---

_👌 Built by [Dave Lunny](http://himynameisdave.com)._