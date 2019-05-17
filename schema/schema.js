const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const RootQueryType = require("./user_type");

module.exports = new GraphQLSchema({
  query: RootQueryType
});