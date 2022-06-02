import { EntityRepository, Repository, Column} from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UsersRepositories extends Repository<User> {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  contato: string;
}

export { UsersRepositories };
