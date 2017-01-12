import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

const key = fs.readFileSync(path.join(__dirname, './../../../../ssl/private.key'));
const pub = fs.readFileSync(path.join(__dirname, './../../../../ssl/public.pem'));

const createJwt = (id, email) => jwt.sign({ id, email }, key, { algorithm: 'RS256' });

const verify =  (authorization) => jwt.verify(authorization, pub, { algorithm: 'RS256' });

export default {
  createJwt,
  verify
};
