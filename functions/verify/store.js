const levelup = require('levelup');
const s3 = require('s3leveldown');
const S3_BUCKET = process.env.S3_BUCKET;

const roles = levelup(s3(`${S3_BUCKET}/roles`));
const accounts = levelup(s3(`${S3_BUCKET}/accounts`));

module.exports = {
  roles: roles,
  accounts: accounts
};