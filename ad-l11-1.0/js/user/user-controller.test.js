const UserController = require("./user-controller");
const User = require("./user");
const userController = new UserController();

test('add user to userController', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});

test('remove user from userController that does not exist', () => {
    let user1 = new User(1234, "Santiago", "santiago@generation.org");
    let user2 = new User(5678, "Maria", "maria@generation.org");

    userController.add(user1)
    expect(userController.getUsers()).not.toContain(user2);
    userController.remove(user2);
    expect(userController.getUsers()).toContain(user1);
    expect(userController.getUsers()).not.toContain(user2);
});

test('find user by email that exists', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    const foundUser = userController.findByEmail("santiago@generation.org");
    expect(foundUser).toEqual(user);
});

test('find user by email that does not exist', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    const foundUser = userController.findByEmail("maria@generation.org");
    expect(foundUser).toBeUndefined();
});

test('find user by ID that exists', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    const foundUser = userController.findById(1234);
    expect(foundUser).toEqual(user);
});

test('find user by ID that does not exist', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    const foundUser = userController.findById(5678);
    expect(foundUser).toBeUndefined();
});
