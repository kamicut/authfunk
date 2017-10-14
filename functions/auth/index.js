const verify = require('./verify');
const issue = require('./issue');
const response = require('./response');

exports.handle = function (e, ctx, cb) {
  const res = response(cb);
  if (event.body) {
    const body = JSON.parse(event.body);
    if (body.username && body.password) {
      // Verify username and password
      verify(username, password, (err) => {
        if (!err) {
          // send a token
          issue(username, (err, token) => {
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