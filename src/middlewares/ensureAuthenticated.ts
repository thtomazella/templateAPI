import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Ipayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization;

  // Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  // Validar se token é válido
  try {
    const { sub } = verify(
      token,
      "3bb077b52f010f867199ac79a342ed91"
    ) as Ipayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }

  // Recuperar informações do usuário
}
