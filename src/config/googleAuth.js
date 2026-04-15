// src/config/googleAuth.js

const { GoogleAuth } = require('google-auth-library');

const googleAuth = new GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

module.exports = googleAuth;
