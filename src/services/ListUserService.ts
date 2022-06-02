import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

class ListUserService {
  async execute() {
    const usersRepositoies = getCustomRepository(UsersRepositories);

    const users = await usersRepositoies.find();

    return classToPlain(users);
  }
}

export { ListUserService };
