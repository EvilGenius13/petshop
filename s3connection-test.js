const AWS = require('aws-sdk');
require('dotenv').config();
// Configure the AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.S3_REGION
});

// Create an S3 client
const s3 = new AWS.S3();

// Call the listBuckets method
s3.listBuckets((err, data) => {
  if (err) {
    console.error('Error connecting to the S3 bucket:', err);
  } else {
    console.log('Connected to the S3 bucket:', data.Buckets);
  }
});