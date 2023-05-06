const users = [
    { id: 1, username: 'user1', password: '1234' },
    { id: 2, username: 'user2', password: '1234' },
    { id: 3, username: 'user3', password: '1234' }
  ];
  
  function getUsers() {
    return users;
  }
  
  function getUserById(id) {
    return users.find(user => user.id === id);
  }
  
  function addUser(user) {
    users.push(user);
  }
  
  function updateUser(id, updatedUser) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
    }
  }
  
  function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
    }
  }
  
  module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
  };
  