const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign(
    { id },
    "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyMDUyNjQzMCwiaWF0IjoxNzIwNTI2NDMwfQ.dq5agL4vE4DzoIwITdEmI-yBd6RuuPtfKCVyzhVgZcc",
    {
      expiresIn: "30d",
    }
  );
};

module.exports = generateToken;
