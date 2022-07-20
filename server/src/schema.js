const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        tracksForHome: [Track!]!
    }
    type Track {
        id: ID!
        thumbnail: String
        title: String!
        length: Int
        count: Int
        author: Author!
    }

    type Author {
        name: String!
        id: ID!
        photo: String
    }

`;

module.exports = typeDefs