import CryptoJS from 'crypto-js';
import { User } from '../database';
import jwt from 'jsonwebtoken'

export const loginFunction = async (username, password) => {
  console.log({username}, {password})
  const user = await User.findOne({where: {username: username}})
  console.log({user})
  if(user){
  const  hash = CryptoJS.SHA512(password + user.salt).toString();
    if( hash === user.password){
      const token = jwt.sign({ role: user.role }, 'my2w7wjd7yXF64FIADfJxNs1oupTGAuW', {noTimestamp: true});
      
      return token;
    }
  }
  return null;
}