import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  const data = await (loginFunction(username, password))

  if (!data) {
    return res.status(403).send("user not found");
  }
  let response = { data };
  res.send(response);
  next();
}