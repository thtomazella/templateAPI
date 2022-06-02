import { Response, Request } from "express";
import { AuthenticationUserService } from "../services/AuthenticationUserService";

class AuthenticationUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticationUserService();

    const token = await authenticateUserService.execute({
      email,
      password,
    });

    return response.status(200).json(token);
  }
}

export { AuthenticationUserController };
