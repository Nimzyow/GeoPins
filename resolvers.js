//dummy user
const user = {
  _id: "1",
  name: "Nima",
  email: "n_soufiani@hotmail.com",
  picture: "https://cloudinary.com/adijo",
};

module.exports = {
  Query: {
    me: () => user,
  },
};
