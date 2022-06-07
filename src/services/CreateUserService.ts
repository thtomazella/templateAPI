import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  nome: string;
  email: string;
  contato: string;
  endereco: string;
}

class CreateUserService {
  async execute({ nome, email, contato, endereco }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!nome || nome.trim() === "") {
      throw new Error("Invalid name");
    }

    if (!email || email.trim() === "") {
      throw new Error("Invalid email");
    }

    if (!contato || contato.trim() === "") {
      throw new Error("Invalid contato");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }


    const user = usersRepository.create({
      nome,
      email,
      contato,
      endereco
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
