
var homeBot = BotUI('home-demo');

homeBot.message.add({
  content: 'Hello there!'
}).then(function () {
  return homeBot.message.add({
    delay: 1500,
    content: 'BotUI is sending these messages'
  });
}).then(function () {
  return homeBot.message.add({
    delay: 1500,
    content: 'Wanna know more about what BotUI can do?'
  });
}).then(function () {
  return homeBot.action.button({
    delay: 1000,
    buttons: [{
      text: 'Sure!',
      value: 'sure'
    }, {
      text: 'Just skip to end 😒',
      value: 'skip'
    }]
  });
}).then(function (res) {
  if(res.value == 'sure') {
    tutorial();
  }
  if(res.value == 'skip') {
    end();
  }
});

var tutorial = function () {
  homeBot.message.add({
    delay: 1500,
    content: 'Cool. Wanna push some buttons?'
  }).then(function () {
    return homeBot.action.button({
      delay: 1000,
      buttons: [{
        text: 'Button one',
        value: 'one'
      }, {
        text: 'Button two',
        value: 'two'
      }]
    });
  }).then(function (res) {
    return homeBot.message.add({
      delay: 1000,
      content: 'You pushed button ' + res.value
    });
  }).then(function () {
    return homeBot.message.add({
      delay: 1000,
      content: 'Cool!'
    });
  }).then(function () {
    return homeBot.message.add({
      delay: 1300,
      content: "Now let's get some input .."
    });
  }).then(function () {
    return homeBot.message.add({
      delay: 1000,
      content: 'Whats your name?'
    });
  }).then(function () {
    return homeBot.action.text({
      delay: 800,
      value: 'John Doe',
      placeholder: 'Your name'
    });
  }).then(function (res) {
    return homeBot.message.add({
      delay: 1000,
      content: res.value + ' is a nice name!'
    });
  });
};

var end = function () {
  homeBot.message.add({
    delay: 1000,
    content: '[Guides](./docs/guide/) &nbsp; [Examples](./docs/examples/) &nbsp; [Refference](./docs/refference/)'
  });
};
