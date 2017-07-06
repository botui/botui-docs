

# Guide


### Hello World

Here's is basic example of BotUI to show a 'Hello World' message.


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>BotUI - Hello World</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/botui/build/botui.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/botui/build/botui-theme-default.css" />
  </head>
  <body>
    <div class="botui-app-container" id="hello-world">
      <bot-ui></bot-ui>
    </div>
    <script src="https://cdn.jsdelivr.net/vue/latest/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/botui/build/botui.js"></script>
    <script>
      var botui = new BotUI('hello-world');

      botui.message.add({
        content: 'Hello World from bot!'
      }).then(function () { // wait till previous message has been shown.

        botui.message.add({
          human: true,
          content: 'Hello World from human!'
        });
      });
    </script>
  </body>
</html>
```


### Messages

You can not only send text in messages but also links, images, and icons.

### Actions

Show a field to get a **text** input:

```javascript
botui.action.text({
  action: {
    placeholder: 'Enter your text here'
  }
}).then(function (res) { // will be called when it is submitted.
  console.log(res.value); // will print whatever was typed in the field.
});
```

We can make use of `sub_type` to ask user for different type of data.

For example, let's ask for an email.

```javascript
botui.action.text({
  action: {
    sub_type: 'email',
    placeholder: 'Enter your text here'
  }
});
```

What this does under the hood is to set the `type` attribute on `input` element. In this case, the attribute would look something like `<input type="email" />`.

This means you can use any valid <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">`input type`</a> here. 😲

```javascript
botui.action.button({
  action: [
    { // show only one button
      text: 'One',
      value: 'one'
    }
  ]
}).then(function (res) { // will be called when a button is clicked.
  console.log(res.value); // will print "one" from 'value'
});
```

### BotUI Markup

BotUI supports a subset of markdown language in `content` on `message` object.

Currently supported set is:

- URLs - Use `[name](url)` syntax to show links.
- Images - Use `![aleternate text](src)` to show Images.
- Icons (not a feature of markdown) - Use `!(icon name)` to show icons.

**URL** Example:

```javascript
botui.message.add({
  content: 'Go ahead, try [our product](https://example.com)'
});
```

This will show up something like:

> Go ahead, try [our product](https://example.com)

BotUI opens links in messages in the same tab, if you want to open the link in new tab then just add `^` at the end of URL syntax. e.g.:

```javascript
botui.message.add({
  content: 'Go ahead, try [our product](https://example.com)^'
});
```

**Image** Example:

```javascript
botui.message.add({
  content: 'Here is an image ![product image](https://example.com/image.png)'
});
```

Here our `product image` will show as `alt` attribute of `img` element.

Preview:

> Here is an image ![product image](https://example.com/image.png)

A linked image:

```javascript
botui.message.add({
  content: 'Here is an image [![product image](https://example.com/image.png)](https://example.com/product.html)'
});
```

Preview:
> Here is an image [![product image](https://example.com/image.png)](https://example.com/product.html)


**Icon** Example:

If you are familiar with FontAwesome then you that in order to show a checkmark icon, we would use something like `<i class="fa fa-check"><i>`


Similarly, to show that icon in BotUI we'd do something like:

```javascript
botui.message.add({
  content: '!(check) All Done!'
});
```

Preview:

> <i class="fa fa-check"><i> All Done!

### Icons

BotUI uses FontAwesome to show icons. It means you can use all the FontAwesome icons in your messages and buttons.

Just use the icon name in `icon` property of `button` or `action` object.

Just like the example above, to show the checkmark icon in a button, we'd do something like:

```javascript
botui.action.button({
  action: [
    {
      icon: 'check',
      text: 'Continue',
      value: 'continue'
    }
  ]
})
```


### Using `cssClass`

Because you don't have control over HTML of the UI you cannot add or remove elements. But BotUI has the option where you can apply CSS classes to certain elements and then apply styles to them as you want.

`cssClass` options is supported on message, action, input and button elements.

For example, to apply a custom class to our messages, you can do something like:

```javascript
botui.message.add({
  cssClass: 'custom-class',
  content: '!(check) All Done!'
});
```

and then you can use `custom-class` in your stylesheet to apply any styles you want to messages.

You can add a single class using `cssClass` or an array of classes like: `cssClass: ['one', 'two']`

### Message `index`

When you add a message to UI, an `index` of that message is returned from internal messages array.
You can think of this `index` as the message id but it can change so its not to be assumed unique.


You can then use this `index` to change or remove a message by calling [`message.update`](reference.md#botui.message.update) or [`message.remove`](reference.md#botui.message.remove) methods on BotUI instance.

To update a message, we can do something like:

```javascript
botui.message.add({
  content: 'Tracking your package ...'
}).then(function (index) { // index of added message
 // do some stuff here from server, etc.

 // let's update the previous message

 // call the `update` method and pass the `index` we got from Promise.
 botui.message.update(index, {
   content: 'Here is the location..'
 });

});
```
