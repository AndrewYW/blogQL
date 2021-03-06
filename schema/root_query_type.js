const graphql = require("graphql");
const  { GraphQLObjectType, GraphQLList, GraphQLNonNull } = graphql;

const mongoose = require('mongoose');
const User = mongoose.model('user');

const UserType = require("./user_type");

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      resolve(parentValue, { id }) {
        return User.findById(id)
      }
    }
  }
});

module.exports = RootQuery;