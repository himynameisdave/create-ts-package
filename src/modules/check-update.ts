import updateNotifier from 'update-notifier';
const pkg = require('../../package.json');

// Update if newer version exists
updateNotifier({ pkg }).notify();