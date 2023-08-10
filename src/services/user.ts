const users = [
  {
    _id: "1",
    name: "Joãozinho",
    group: "7 ano - Turma B",
    img_path: "../assets/layers.png",
  },
  {
    _id: "2",
    name: "Joana",
    group: "1 ano - Turma B",
  },
];

export const getUsers = () => {
  return users;
};

export const getUser = (id: string) => {
  return users.find((user) => user._id === id);
};

export const getUsersNames = () => {
  return users.map((user) => user.name);
};
