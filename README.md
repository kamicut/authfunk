# authfunk

Single auth function for API Gateway + Lambda. Basically send a POST to the function with a form body like:
```
{
  "username": "importantuser",
  "password": "topsecret"
}
```
and receive a JWT token of the form:
```
{
  "username": "importantuser",
  "role": "admin",
  "iat": 1508016459,
  "exp": 1508052459
}
```

This function is experimental and untested, but I needed this protocol format. If you want a simple and strong authentication solution I recommend checking out [Auth0](Auth0.com).

## Install

You need to set the `AUTHFUNK_SECRET` which is what you will use to sign JWT tokens, and `AUTHFUNK_BUCKET` which is where you read and write users.

[...] More instructions TODO

## LICENSE
MIT