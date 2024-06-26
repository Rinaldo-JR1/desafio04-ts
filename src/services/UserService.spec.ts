import { User, UserService } from "./UserService";

describe("UserService", () => {
  const mockDb: User[] = [
    {
      email: "Teste@email.com",
      name: "Teste",
    },
  ];
  const userService = new UserService(mockDb);

  it("Deve adicionar um novo usuário", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("nath", "nath@test.com");
    expect(mockConsole).toHaveBeenCalledWith("DB atualizado", mockDb);
  });
  
  it("Deve deletar um usuario", async() => {
    const mockConsole = jest.spyOn(global.console, "log");
    await userService.deleteUser("Teste@email.com");
    expect(mockConsole).toHaveBeenCalledWith("DB atualizado");
  });

  it("Deve listar todos os ususarios", () => {
    const users = userService.getAllUsers();
    expect(users).toEqual(mockDb);
  });
  it("Deve apresentar um erro ao tentar criar um usuario", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("", "");
    expect(mockConsole).toHaveBeenCalledWith(
      "Campos obrigatorios não preenchidos"
    );
  });
});
