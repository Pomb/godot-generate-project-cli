function log (msg, lvl, args) {
  lvl = lvl || Level.normal
  var col = Colors[lvl]
  if (args) {
    console.log(`${col}${msg}`, args);
  } else {
    console.log(`${col}${msg}`);
  }
}

const Colors = Object.freeze({
  normal: '\x1b[0m',
  error: '\x1b[31m',
  positive: '\x1b[32m',
  warning: '\x1b[33m',
});

const Level = Object.freeze({
  normal: 'normal',
  error: 'error',
  positive: 'positive',
  warning: 'warning',
});

module.exports = { log, Level }