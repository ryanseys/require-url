# require-url

Require a node module from a url.

> "One of the stupidest things I've ever made." - Ryan Seys, 2014

## Install

``` sh
npm install require-url
```

## Usage

``` js
var require_url = require('require-url');
var url = 'https://gist.githubusercontent.com/ryanseys/b81ead1d499ed5e94b29/raw/hello.js';

require_url(url, function(err, mod) {
  if(err) throw err;
  mod(); // 'hello from a github gist'
});
```

## Contributing

I wouldn't bother if I were you. But if you really want to, send a PR / issue.

## License

MIT
