export interface User {
  name: string;
  email: string;
}

const db = [
  {
    name: "Joana",
    email: "joana@dio.com",
  },
];

export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }

  deleteUser = (email: string) => {
    const userIndex = this.db.findIndex((user) => user.email === email);

    if (userIndex === -1) {
      console.log("Usuário não encontrado");
      return;
    }

    this.db.splice(userIndex, 1);
    console.log("Usuário deletado", this.db);
  };
  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    if(!name || !email) {
      console.log("Campos obrigatorios não preenchidos");
      return;
    }
    this.db.push(user);
    console.log("DB atualizado", this.db);
  };

  getAllUsers = () => {
    return this.db;
  };
}
