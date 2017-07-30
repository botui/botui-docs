
## Installation


### Using CDN

A BotUI page requires following files. You can use these links directly in your page.

```
// required for basic layout
https://unpkg.com/botui/build/botui.min.css

// default theme - you can create your own theme
https://unpkg.com/botui/build/botui-theme-default.css

// Vue - BotUI requires Vue to be present in page
https://cdn.jsdelivr.net/vue/latest/vue.min.js

// BotUI - main file
https://unpkg.com/botui/build/botui.min.js

```


### NPM Install

```bash
npm install botui --save
```

And include the files in `build` folder according to your setup.

Files you would need are:

```
node_modules/botui/build/botui.min.css
node_modules/botui/build/botui-theme-default.css
node_modules/botui/build/botui.js
```

### Using Webpack

In webpack or rollup, you'll also need to `import` Vue.

```javascript
import Vue from 'vue'
import BotUI from 'botui'

const botui = BotUI('my-botui-app', {
  vue: Vue // pass the dependency.
})
```

> Make sure to use the minified version of Vue. Full version produces errors for some reasons.

You can add an `alias` in your webpack `config` like this:

```javascript
module.exports = {
  ...
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js',
    }
  },
  ...
}
```


### Local Download

You can download the latest files from [Github repo](https://github.com/moinism/botui/) and link them to your project.

All the required files are in `build` folder. But you still have to add [Vue](https://cdn.jsdelivr.net/vue/latest/vue.min.js), either via CDN or local script.


A bare-bone page with all the required files should look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>BotUI</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="./botui/build/botui.min.css" />
    <link rel="stylesheet" href="./botui/build/botui-theme-default.css" />
  </head>
  <body>

    .....

    <script src="https://cdn.jsdelivr.net/vue/latest/vue.min.js"></script>
    <script src="./botui/build/botui.min.js"></script>
  </body>
</html>
```

### bot-ui Tag

`<bot-ui>` tag is where the magic begins.

After you've linked all the required files in the page. Now you can proceed to add `<bot-ui>` tag where you want the bot to appear in your page.

For example:

```html
<div id="my-botui-app">
  <bot-ui></bot-ui>
</div>
```

Now BotUI will populate `#my-botui-app` element with all the required DOM. i.e: You'll see your bot here.

### Initiate BotUI

After you've added the `<bot-ui>` to your markup, its time for the last step of installation.

```javascript
var botui = new BotUI('my-botui-app');
```

`BotUI` should a global variable in the page if you've included all the required files correctly.

Pass the `id` of the element which has the `<bot-ui>` tag.

That's it. now you can start adding messages and showing actions.
