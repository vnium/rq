# Dependencies require in shorthand

### Install
* `npm i vrequire --save`

### How to use?
* create `config/rq.json`

```
{
	"utils": "app/lib/utils",
	"others": "from/root/dir/to/a/very/very/very/very/deep/path/to/your/module"
}
```

* And in your module
```
var rq = require('vrequire'),
	utils = rq('utils'),
	others = rq('others');
```
