import dotenv from 'dotenv';

dotenv.config();

import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {
  const delloHeader = req.headers['authorization'];

  if (typeof delloHeader !== 'undefined') {
    const Dello = delloHeader.split(' ');
    const delloToken = Dello[1];

    req.token = delloToken;

    try {
      const decoded = jwt.verify(req.token, process.env.JWT_SECRET);
      if (decoded) {
        console.log(decoded);
        next();
      } else {
        throw new Error(decoded);
      }
    } catch (err) {
      console.log(err);
      res.status(403).json({
        status: 403,
        error: true,
        message: 'Your token is invalid or expired',
      });
    }
  } else {
    res.status(403).json({
      status: 403,
      error: true,
      message: 'Please insert token',
    });
  }
}
