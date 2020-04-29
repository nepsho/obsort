# ObSort
[![Build Status](https://travis-ci.org/nepsho/obsort.svg?branch=master)](https://travis-ci.org/nepsho/obsort)
[![npm license](https://img.shields.io/static/v1.svg?label=License&message=MIT&color=informational)](https://github.com/nepsho/obsort/blob/master/LICENSE)
[![npm repository](https://img.shields.io/static/v1.svg?label=Repository&message=GitHub&color=yellow)](https://github.com/nepsho/obsort)

**JavaScript** module to sort array of object

## Installing
```bash
$ npm install obsort
```

## Examples

```js
>> const obsort = require("obsort");
```
```js
>> var arr = [{...},{...},{...},{...}];
>> arr.sort(obsort("field"));
>> arr.sort(obsort("field1","field2");
```

## licence
MIT [licence](https://opensource.org/licenses/MIT)

## Author
[@BCrazyDreamer](https://www.npmjs.com/~bcrazydreamer)