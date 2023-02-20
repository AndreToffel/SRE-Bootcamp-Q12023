import { protectFunction } from '../services/protected';

export const protect = (req, res, next) => {
  if(req.headers.authorization){
    try{
      let response = protectFunction(req.headers.authorization.split(' '));
      if(response){
        res.send({data: response});
        return next();
      }
      else{
        return res.status(401).send({data: 'token not valid'});
      }
    }catch(err){
      return res.status(403).send({data: 'Not authorized'});
    }
  }else{
    return res.status(401).send({data: 'auth header not sent'});
  }
}
