// wire graphql server in server.js
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.GEOPINS_TEST_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("DB connected");
  } catch (err) {
    console.error(err);
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

connectToDb();

server.listen().then(({ url }) => {
  console.log(
    `server listening on ${url}. 
Environment is ${process.env.NODE_ENV}`,
  );
});
