require('dotenv').config();
const aws = require('aws-sdk');

const SESConfig = {
    apiVersion: '2010-12-01',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
};
var params = {
  Destination: {
    ToAddresses: [
      'nirveeknaskar21@gmail.com',
    ]
  },
  Message: { /* required */
    Body: { /* required */ 
      Html: {
       Charset: "UTF-8",
       Data: "Sample email from SES"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'SES email'
     }
    },
};

// Create the promise and SES service object
var sendPromise = new AWS.SES(SESConfig).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log("Success");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });