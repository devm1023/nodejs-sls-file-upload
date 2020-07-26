// src/resolvers.js

const { CheckResultAndHandleErrors } = require('apollo-server-lambda');
const { extname } = require('path');
const { v4: uuid } = require('uuid');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const defaulBucketName = 'apollo-jpg-upload-demo-dev-us-east-1-artifacts';

module.exports = {
  Query: {
    uploads: (_, args) => {},
  },
  Mutation: {
    uploadFile: async (_, { bucket, filename, filetype }) => {
      
      if (filetype != 'image/jpeg') {
        return CheckResultAndHandleErrors('not matched file format!');
      }

      const s3Params = {
        Bucket: bucket,
        Key: `${uuid()}${extname(filename)}`,
        ContentType: filetype,
        ACL: 'public-read',
      };
      console.log(s3Params);
      const uploadURL = await s3.getSignedUrl('putObject', s3Params);
      return {
        filename,
        filetype,
        uri: uploadURL,
      }; 
    },
  },
};
