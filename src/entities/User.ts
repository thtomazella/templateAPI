import {
  Entity,
  Column,
  PrimaryColumn
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  contato: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
