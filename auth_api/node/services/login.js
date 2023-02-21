import CryptoJS from 'crypto-js';
import { User } from '../database';
import jwt from 'jsonwebtoken'

export const loginFunction = async (username, password) => {
  const user = await User.findOne({ where: { username: username } })
  if (!user) {
    return null;
  }
  const hash = CryptoJS.SHA512(password + user.salt).toString();
  if (hash === user.password) {
    const token = jwt.sign({ role: user.role }, 'my2w7wjd7yXF64FIADfJxNs1oupTGAuW', { noTimestamp: true });
    return token;
  }
}