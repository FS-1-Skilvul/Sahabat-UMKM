const jwt = require('jsonwebtoken');

const validateRole = (req, res, next) => {
  const header = req.header('Authorization');

  if (!header) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const token = header.split(' ')[1];
    console.log('Received Token:', token);
    const decoded = jwt.verify(token, 'ryryryryry');
    
    req.user = decoded;

    console.log('Decoded Token:', decoded);

    if (req.user.role !== 'admin' && req.originalUrl.startsWith('/auth/admin')) {
      return res.status(403).json({ message: 'Access denied. Invalid role.' });
    }
    next();
  } catch (err) {
    console.error('Error during token verification:', err);

    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token.' });
    } else if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired.' });
    } else {
      return res.status(400).json({ message: 'Unexpected error during token verification.', error: err.message });
    }
  }
};

module.exports = validateRole;
