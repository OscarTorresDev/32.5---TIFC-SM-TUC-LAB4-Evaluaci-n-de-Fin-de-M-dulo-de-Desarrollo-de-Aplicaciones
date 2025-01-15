const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('debe agregar un usuario a la lista si no esta aun', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");

  // Verificamos que el usuario no esté en la lista antes de agregarlo
  expect(userController.getUsers()).not.toContain(user);

  // Agregamos el usuario a la lista
  userController.add(user);

  // Verificamos que el usuario se ha agregado correctamente
  expect(userController.getUsers()).toContain(user);
});

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

