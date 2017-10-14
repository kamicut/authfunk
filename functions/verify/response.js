module.exports = cb => (statusCode, message) => {
  const formatted = {
    statusCode: statusCode,
    body: JSON.stringify(message)
  }

  return cb(null, formatted);
}
