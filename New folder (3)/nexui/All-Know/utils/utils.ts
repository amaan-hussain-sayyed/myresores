import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const   capitalize = (str
    : string
)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

export const verifyPassword = async (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (payload: object, secret: string, expiresIn: string) => {
    return jwt.sign(payload, secret, { expiresIn });
};

export const verifyToken = (token: string, secret: string) => {
    return jwt.verify(token, secret);
};
