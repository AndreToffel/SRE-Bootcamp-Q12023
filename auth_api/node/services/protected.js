import jwt from 'jsonwebtoken';

export const protectFunction = (authorization) => {

if (authorization[0] === "Bearer" && jwt.verify(authorization[1], 'my2w7wjd7yXF64FIADfJxNs1oupTGAuW')) {
return "You are under protected data";
}
  // if(authorization[0] === 'Bearer'){
  //   const verify_jwt = jwt.verify(authorization[1],'my2w7wjd7yXF64FIADfJxNs1oupTGAuW');
  //   return verify_jwt;
  // }
  else{
    return null;
  }
}
