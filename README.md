# babel-plugin-optimize-react-import [![Travis Status](https://travis-ci.org/mochiya98/babel-plugin-optimize-react-import.svg?branch=master)](https://travis-ci.org/mochiya98/babel-plugin-optimize-react-import) [![Coverage Status](https://coveralls.io/repos/github/mochiya98/babel-plugin-optimize-react-import/badge.svg?branch=master)](https://coveralls.io/github/mochiya98/babel-plugin-optimize-react-import?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> reduce your bundle size

```js
import Hoge, { Foo, Bar } from "react";
```

converted to :

```js
import * as Hoge from "react";
import { Foo, Bar } from "react";
```
