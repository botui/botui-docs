
# BotUI Concepts

There are some important parts of BotUI.

1. Message
2. Action
3. Use of `.then()`

## Message

A message is the text that shows up in the UI. It can be either from the bot or human.

The message from bot shows up aligned to the left. The message from human shows up aligned to the right of UI and with a slighted different background that bot message.

Developer has total control over which message to show and what to show in it.

Here is how to show a message from bot:

```javascript
botui.message.add({
  content: 'Hello from bot.'
});
```

And here's how to show it as a user sent message:

```javascript
botui.message.add({
  human: true,
  content: 'Hello from human.'
});
```

Notice that the only thing different is `human: true`. You can also use `message.bot` and `message.human` instead of `message.add`.

## Action

Action could be some text input required from user. Or a couple of buttons.

Developer can show or hide the action. But only one type of action can be shown at once.

Here's how to ask for a user's name:

```javascript
botui.message.add({ // show a message
  human: true,
  content: 'Whats your name?'
}).then(function () { // wait till its shown
  botui.action.text({ // show 'text' action
    action: {
      placeholder: 'Your name'
    }
  });
})
```

This will first show a message and then show an input field with `Your name` as its `placeholder` attribute value.
You can read more about it in the guide.

## Use of then

You are mostly likely to show a message after the previous one is shown or after an action has been performed so we need some kind of callback here. That's where `then` comes in. You can define your callback function inside a `then` and chain it to previous message or action.

Like in this example:

```javascript
botui.message.add({ // show a message
  human: true,
  content: 'Whats your name?'
}).then(function () { // wait till its shown
  botui.action.text({ // show 'text' action
    action: {
      placeholder: 'Your name'
    }
  });
})
```

Here `then` will only be called once the previous message has been shown.

You keep chaining messages and actions together using `then`.


```javascript
botui.message.add({ // show a message
  human: true,
  content: 'Whats your name?'
}).then(function () { // wait till its shown
  return botui.action.text({ // show 'text' action
    action: {
      placeholder: 'Your name'
    }
  });
}).then(function (res) { // get the result
  botui.message.add({
    content: 'Your name is ' + res.value
  });
});
```

> Notice a `return` in first `then`. You'll need to `return` a Promise if you want to keep chaining. Otherwise `then` will be called without waiting for previous message or action to be done.


All the `message` and `action` methods return a `Promise` so we can use `.then()` to chain them together.
