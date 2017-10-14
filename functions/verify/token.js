const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const roles = require('./store').roles;

module.exports = (username, cb) => {
  roles.get(username, (err, role) => {
    if (err) cb(err);
    else {
      const token = jwt.sign({
        username: username,
        role: JSON.parse(role)
      }, JWT_SECRET, {
        expiresIn: "10h"
      });
      cb(null, token);
    }
  })
}