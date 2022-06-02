import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticationUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositoies = getCustomRepository(UsersRepositories);

    if (!email || email.trim() === "") {
      throw new Error("Email or Password incorrect");
    }

    // Verificar se email existe
    const user = await usersRepositoies.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email or Password incorrect");
    }

    // Verificar se senha esta correra
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or Password incorrect");
    }

    // Token
    const token = sign(
      {
        email: user.email,
      },
      "3bb077b52f010f867199ac79a342ed91",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticationUserService };
