const verify = require('./verify');
const issue = require('./token');
const response = require('./response');

exports.handle = function (event, ctx, cb) {
  const res = response(cb);
  if (event.body) {
    const body = JSON.parse(event.body);
    if (body.username && body.password) {
      // Verify username and password
      verify(body.username, body.password, (err) => {
        if (!err) {
          // send a token
          issue(body.username, (err, token) => {
            if (!err) {
              return res(200, {token: token});
            } else {
              return res(500, 'Server Error');
            }
          });
        } else {
          return res(401, 'Verification Failed');
        }
      });
    }
  }
}