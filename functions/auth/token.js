const jwt = require('jsonwebtoken');
const env = require('require-env');
const JWT_SECRET = env.require('JWT_SECRET');

const roles = require('./store').roles;

const issue = (username, cb) => {
  store.get(username, (err, role) => {
    if (err) cb(err);
    else {
      const jwt = jwt.sign({
        username: username,
        role: role
      }, JWT_SECRET);
      cb(null, jwt);
    }
  })
}