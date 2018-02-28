# is-url-nextjs-page

[![](https://nodei.co/npm/is-url-nextjs-page.png?compact=true)](https://nodei.co/npm/is-url-nextjs-page/)

[![npm](https://img.shields.io/npm/dm/is-url-nextjs-page.svg?style=for-the-badge)](https://www.npmjs.com/package/is-url-nextjs-page)
[![npm](https://img.shields.io/npm/l/is-url-nextjs-page.svg?style=for-the-badge)](https://www.npmjs.com/package/is-url-nextjs-page)

## Why?

I need to check if a resource being requested is a nextjs page and if it is, I need to serve it's gzipped version. So I wrote this utility to check if a given url is a nextjs page.

## What

A utility to check if the requested path a nextjs page script, generally present in .next/bundles/pages.

## Usage

```javascript
import isUrlNextJsPage from "../lib";
const isNextJsPage = isUrlNextJsPage(req.url);
```

## Enjoy 📚📚

If you find any issues with it, please submit a PR or an issue!
