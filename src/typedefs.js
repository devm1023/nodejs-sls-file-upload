// src/typedefs.js

const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type File {
    uri: String!
    filename: String!
    filetype: String!
  }

  type Query {
    uploads: [File]
  }

  type Mutation {
    uploadFile(
        filename: String!
        filetype: String!
        bucket: String!
    ): File
  }
`;
