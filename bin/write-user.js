#!/usr/bin/env node
const store = require('../functions/auth/store');
const crypto = require('crypto')
const shasum = require('shasum')

const cli = require('meow')(`
Usage
  write-user username password role
`);

if (cli.input.length < 3) {
  console.error('Not enough arguments');
  cli.showHelp(1);
}

const user = cli.input[0];
const password = cli.input[1];
const role = cli.input[2];

const create = (username, password, cb) => {
  var salt = crypto.randomBytes(16)
  var password = Buffer(password)
  var res = {
    username: username,
    hash: shasum(Buffer.concat([salt, password])),
    salt: salt.toString('hex')
  }
  return store.accounts.put(username, JSON.stringify(res), cb);
}

function exit(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    process.exit(0);
  }
}

// Create a user and assign a role
create(user, password, err => {
  if (err) exit(err);
  store.roles.put(user, role, err => {
    if (err) exit(err);
  })
})