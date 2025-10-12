import jwt from 'jsonwebtoken';

const JWTSECRET  = process.env.JWT_SECRET || 'your_jwt_secret_key';
const JWTEXPIRY = process.env.JWT_EXPIRY || '1d';

export const jwttoken = {
    sign: (payload) => {
         try {
             return jwt.sign(payload, JWTSECRET, { expiresIn: JWTEXPIRY });
         } catch (error) {
            logger.error('Failed to authenticate token:', error);
            throw new Error('Token signing failed');
         }
    },
    verify: (token) => {
        try {
            return jwt.verify(token, JWTSECRET);
        } catch (error) {
            logger.error('Failed to authenticate token:', error);
            throw new Error('Token verification failed');
        }
    }
}