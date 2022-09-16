const { app } = require('electron');
const ua = require('universal-analytics');
const { v4: uuidv4 } = require('uuid');
const { JSONStorage } = require('node-localstorage');
const nodeStorage = new JSONStorage(app.getPath('userData'));



// Retrieve the userid value, and if it's not there, assign it a new uuid.
const userId = nodeStorage.getItem('userid') || uuidv4();

// (re)save the userid, so it persists for the next app session.
nodeStorage.setItem('userid', userId);

const usr = ua('UA-171783078-3', userId);

function trackEvent(category, action, label, value) {
  usr
    .event({
      ec: category,
      ea: action,
      el: label,
      ev: value,
    })
    .send();
}

module.exports = { trackEvent };