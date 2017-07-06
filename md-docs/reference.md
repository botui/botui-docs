

# API Reference

- [Constructor](#constructor)
  - [Parameters](#parameters)
- [`BotUI` instance](#botui-instance)
    - [`message`](#botui.message)
      - [`add`](#botui.message.add)
      - [`bot`](#botui.message.bot)
      - [`get`](#botui.message.get)
      - [`human`](#botui.message.human)
      - [`update`](#botui.message.update)
      - [`remove`](#botui.message.remove)
      - [`removeAll`](#botui.message.removeAll)
    - [`action`](#botui.action)
      - [`show`](#botui.action.show)
      - [`hide`](#botui.action.hide)
      - [`text`](#botui.action.text)
      - [`button`](#botui.action.button)
- [`message`](#message-object) object
- [`action`](#action-object) object
- [`text`](#text-object) object
- [`button`](#button-object) object
- [`result`](#result-object) object
- [`Promise`](#promise)

## Constructor

The `BotUI` constructor. Returns a [`BotUI` instance](#botui-instance).

#### Parameters
  - `id` - _required_ - The `id` of the element which has the `<bot-ui>` tag.
  - `options` - _optional_ - An `object` of options.

  ```javascript
  // options with default values.
  {
    debug: false, // set this to true if you want to debug the underlaying Vue instance
    fontawesome: true, // set this to false if you already have FontAwesome in your project and don't want it to be loaded again by BotUI.
  }
  ```

## BotUI instance

This instance has two properties.

  - [`message`](#botui.message)
  - [`action`](#botui.action)


### botui.message

This method can be used to add, remove or update messages in the UI.

It has seven methods.

- #### `botui.message.add`
  Appends a message to UI.

  Accepts an `object` of [`message`](#message-object) type.

  Returns [`Promise`](#promise) with `index` of added message.

- #### `botui.message.bot`
  Appends a message to UI. Just a shorthand to `message.add`.

  Accepts an `object` of [`message`](#message-object) type.

  Returns [`Promise`](#promise) with `index` of added message.

- #### `botui.message.human`
  Appends a message to UI and sets the `human` to `true`.

  Accepts an `object` of [`message`](#message-object) type.

  Returns [`Promise`](#promise) with `index` of added message.

- #### `botui.message.get`

  Accepts an `index` of [`message`](#message-object).

  Returns [`Promise`](#promise) with [`message`](#message-object) object.

- #### `botui.message.update`
  Updates a message in UI.

  Accepts 2 parameters.
  1. `index`
  2. [`message`](#message-object)

  > Only `content` of message can updated. `type` of a message cannot be changed.

  Returns [`Promise`](#promise) with updated `content` of [`message`](#message-object).

- #### `botui.message.remove`
  Removes a message from UI.

  Accepts an `index` of [`message`](#message-object) to be removed.

  > Be careful while using it. It changes all the internal `index`s for messages. Which may result in strange behavior of `message.update`.

  Returns [`Promise`](#promise).

- #### `botui.message.removeAll`
  Removes all the messages from UI.

  Returns [`Promise`](#promise).

### botui.action

This method can be used to show, hide or set an action to be performed in UI.

It has four methods.

  - #### `botui.action.show`
    Shows the action section.

    Accepts an `object` of [`action`](#action-object) type.

    Returns [`Promise`](#promise)
  - #### `botui.action.hide`
    Hides the action section. Does not expect any parameters.

    Returns [`Promise`](#promise)
  - #### `botui.action.text`
    Shows the action section and sets the action `type` to `text`. Its a shorthand to `show`.

    Accepts an `object` of [`action`](#action-object) type.

    Returns [`Promise`](#promise) with [`result`](#result-object) as argument.
  - #### `botui.action.button`
    Shows the action section and sets the action `type` to `button`. Its a shorthand to `show`.

    Accepts an `object` of [`action`](#action) type.

    Returns [`Promise`](#promise) with [`result`](#result-object) as argument.

### message object

Can be passed to ..

```javascript
// with default values.

{
  delay: 0, // wait before showing the message. in milliseconds.

  type: 'text', // either 'text' or 'embed'

  content: '', // Should be a URL if type is 'embed', text otherwise.

  human: false, // should be shown aligned to right side?

  cssClass: '', // a string or array of custom CSS classes you want to be added.
}
```

### action object

Can be passed to `botui.action.show`, `botui.action.text` and `botui.action.button`.

```javascript
// with default values.

{
  type: 'text', // either 'text' or 'button',

  action: [], // array of 'button' objects if type is 'button'. object of 'text' otherwise.

  cssClass: '', // a string or array of custom CSS classes you want to be added.

  autoHide: true, // should the actions sections be hidden when submitted.

  addMessage: true // text from action is added as a message in UI from human side.
}
```

### text object

Required as `action` in `action` object.

```javascript
{
  size: 30, // size of the input to show. Relies on HTML size attribute for input elements.

  sub_type: '', // Could be any of the valid types for HTML input elements. e.g.: number, tel, time, date, email, etc.

  value: '', // pre-populates the text field. Only for 'text' type.

  placeholder: 'Write here ..', // Sets the placeholder text for the input element.
}
```

### button object

Required as `action` array in `action` object.

```javascript
{
  icon: '', // icon to show in button.
  text: '', // Text to show in the button. be creative!
  value: '', // this is how you will identify the button when result is returned.

  cssClass: '' // a string or array of custom CSS classes you want to be added.
}
```


### result object

Passed as argument to the `Promise` returned by `action` methods.

```javascript
{
  type: '', // 'Text' or 'Button' Type of the action it was returned from.

  value: '', // Text in the input in case type is 'text'. If type is 'button' then its the same as 'value' in button object.

  text: '' // only present if type of message is 'button'. same as the 'text' in button object.
}
```

## Promise

This is an _always-resolving_ JavaScript <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="blank">`Promise`</a>.
It means you don't need a `catch`, it will always resolve to a `then`.
