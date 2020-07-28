# apollo-jpeg-upload

This is a Lambda Function to upload only a JPEG file to S3.

## Pre-requisites

- API credentials for AWS, with proper permissions.
- Serverless framework installed locally via `npm install serverless -g`.
- Node.js and `npm` installed locally.
## Set the environment variable
1. create `env` file

```
cp env.yml.example env.yml
```
2. edit `env` file

```
BUCKET_NAME: add-your-bucket-name
```

## Deploy

1. Install the dependencies:

```
npm install
```
2. deploy

```
sls deploy
```

## How to use it?

1. Run Graphql Query to get a signedUrl to upload file to S3.

```
mutation uploadFile($bucket: String! $filetype: String! $filename: String!) {
    uploadFile(bucket:$bucket, filename: $filename, filetype: $filetype){
        uri
        filename
        filetype
    }
}
```
2. Put a file to the signedUrl.

#### You can use following code to test this function.
```
https://github.com/devm1023/simple-node-serever
```
