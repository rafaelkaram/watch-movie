const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ msg: 'Token indefinido.' });
  jwt.verify(token, process.env.JWT_USER_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ msg: 'Falha na autenticação do Token.' });
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyJWT;