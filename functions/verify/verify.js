const accounts = require('./store').accounts;
const shasum = require('shasum');

module.exports = (username, password, cb) => {
  if (!username || !password) return cb(new Error('Credentials required'));
  accounts.get(username, function (err, account) {
    if (err) return cb(err);
    const accountData = JSON.parse(account);
    var tohash = Buffer(password);
    var salt = Buffer(accountData.salt, 'hex')
    var hash = shasum(Buffer.concat([salt, tohash]))
    if (hash !== accountData.hash) return cb(new Error('Account not verified'))
    else return cb(null, { username: username });
  })
}