# BotUI

> A JavaScript framework to build UI for your bot.

BotUI makes it super easy to create conversational/bot interfaces. It has an intuitive JavaScript API to add messages and show actions that a user can perform.

It also gives you total control over how everything looks. You can also create your own [themes](theme.md).


### Overview

Here's a quick preview of how it works.

#### The HTML

Add the `<bot-ui>` where you want the bot to appear.

```html
...

<div id="my-botui-app">
  <bot-ui></botui>
</div>

...
```


#### JavaScript

Pass the parent element's `id` to `BotUI` constructor.

```javascript
var botui = new BotUI('my-botui-app');
```

Call the `message.add` method to show a message.

```javascript
botui.message.add({
  content: 'Hello There!'
}).then(function () { // wait till its shown
  botui.message.add({ // show next message
    content: 'How are you?'
  });
});
```

Follow the docs for details about how everything works.
