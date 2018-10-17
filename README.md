# Autogit Plugin - Commit

A plugin for making a commit.

## Install

```sh
npm install --save autogit-plugin-commit
```

## Usage

#### Options

This plugin uses the following options object:

```js
{
  message: '' // The message of the commit
}
```

#### Configuration

Add this plugin to a command:

```js
const commit = require ( 'autogit-plugin-commit' );

module.exports = {
  commands: {
    'my-command': [
      commit ({ message: 'My commit' })
    ]
  }
}
```

## License

MIT © Fabio Spampinato
