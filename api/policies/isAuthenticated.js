var jwt = require('express-jwt');

var authCheck = jwt({
  secret: new Buffer('kXFLJkHDECIY6fvkJ5qVd4_dB7_dA5-tu1cUkRel6d18ubb9VfmyKb5JSiK7EgTc', 'base64'), //AUTH0_CLIENT_SECRET
  audience: 'Q0gtGS2UxJNLuaYDWjRbfAw3C1rHCTDM' //AUTH0_CLIENT_ID
});

module.exports = authCheck;
