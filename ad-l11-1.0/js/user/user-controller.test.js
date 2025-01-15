const UserController = require("./user-controller");
const User = require("./user");
 
const userController = new UserController();
 
test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });
 
  //Implementar 1 prueba para la función add() que verifica un usuario que no está en la lista de usuarios..
  test('test agregar usuario', () => {    
    let usuario = new User(9999,"John", "john@generation.org");
    userController.add(usuario)
    expect(userController.getUsers()).toContain(usuario);
  });  
 
  //Implementar 1 prueba para la función remove()
  test('test agregar usuario', () => {    
   let usuario2 = new User(2746,"Jairo", "jairo@generation.org");
    userController.add(usuario2)
    userController.remove(usuario2)
    expect(userController.getUsers()).not.toContain(usuario2);
  });  
 
  //Implementar 2 pruebas unitarias para la función findByEmail().
  test('test filtrar usuario por email', () => {    
    let usuario3 = new User(9380,"Nelson", "nelson@generation.org");
    userController.add(usuario3)
    expect(userController.findByEmail(usuario3.getEmail())).toContain("nelson@generation.org");
  });
  //Implementar 2 pruebas unitarias para la función findById().
  test('test filtrar usuario por id', () => {    
    let usuario4 = new User(5858,"Juan", "juan@generation.org");
    userController.add(usuario4)
    expect(userController.findById(5858)).toBe(usuario4);
  });

