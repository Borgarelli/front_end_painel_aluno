const members = [
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

export const getMembers = () => {
  return members;
};

export const getMember = (id: string) => {
  return members.find((member) => member._id === id);
};

export const getMembersNames = () => {
  return members.map((member) => member.name);
};
