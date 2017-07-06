
# BotUI Theme

Its also quite easy to create a custom them for your BotUI.


## Create your own

1. Clone the git repo.
2. `cd` to cloned folder.
3. Do an `npm install`
4. Run `gulp watch`
5. Go to `src/styles/themes` folder
6. Make a copy of `default.scss` file and name it anything like `custom.scss`
7. Now you can change the styles in `custom.scss` and save the file.
8. Go to `build` folder and you'll see a `botui-theme-custom.css` file there.
9. Copy it into your project and link it instead of `botui-theme-default.css`.

10. Thats it!.


## Structure



#### HTML

This is what the HTML of BotUI looks like when initiated:

```html
<div class="botui botui-container">
  <div class="botui-messages-container">
    <div class="botui-message"> <!-- This element will also have any classes applied via 'cssClass' to 'message' -->
      <div :class="[{human: msg.human, 'botui-message-content': true}, msg.type]"> <!--  -->
        <span></span> <!-- If type is text, this will hold that text -->
        <iframe></iframe> <!-- If type is embed -->
      </div>
    </div>
  </div>
  <div class="botui-actions-container">
    <div>
        <form class="botui-actions-text" :class="action.cssClass">  <!--  -->
        <input class="botui-actions-text-input" :class="action.text.cssClass" required/> <!--  -->
        <button class="botui-actions-text-submit">Go</button> <!-- only present on mobile devices -->
        </form>
        <div class="botui-actions-buttons" :class="action.cssClass"> <!--  -->
          <button :class="button.cssClass" class="botui-actions-buttons-button"> <!--  -->
          <i class="botui-icon botui-action-button-icon fa" :class="'fa-' + button.icon"></i> <!--  -->
          <!-- button text -->
        </button>
      </div>
    </div>
  </div>
</div>
```

#### SCSS

You can follow this structure to customize BotUI as you want in your own theme.

```css

.botui-container {

  .botui-messages-container {
  }

  .botui-actions-container {
  }

  .botui-message {

    .botui-message-content {

      &.human {

      }

      &.text {
      }

      &.embed {

      }
    }

    .botui-message-content-link {
    }

  }

  .botui-actions-text-input {

  }

  .botui-actions-text-submit {

  }

  .botui-actions-buttons-button {

  }

}

```
