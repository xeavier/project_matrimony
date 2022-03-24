import dotenv from 'dotenv';

dotenv.config();

export default {
    // App name
    appName: 'Rocket Rides',

    // Public domain of Rocket Rides
    publicDomain: 'http://localhost:5000',

    PORT: process.env.PORT || 5000,

  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://gokul:Lagdmava@12345@cluster0.div9p.mongodb.net/test?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  //PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  //accessKeyId: process.env.accessKeyId || 'accessKeyId',
  //secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
  secret: 'YOUR_SECRET',
  stripe: {
    secretKey: 'sk_test_51Jr1ABAkZRSPcjZFcZVEQxwrgfk7r3mrP3d976217yEb4oq3yNDHY1hjAUX139UyNKKZr2qXGij9gqZJnqPAJZoD006SQTAboN',
    publishableKey: 'pk_test_51IA9H9CBuppVbAgLQYGTO4bZvU5UYa5K7vGZY9UfvcYcxoDKP9xvCruGbE5dXZYyTmaopmws3ryYkyDjYsOWGvE700lQi3xb67',
    clientId: 'ca_ImORwqmjbtosbCA3OExOVGpFEfbVxxWL',
    authorizeUri: 'https://connect.stripe.com/express/oauth/authorize',
    tokenUri: 'https://connect.stripe.com/oauth/token'
  }
};
//'mongodb+srv://gokul:Lagdmava@12345@cluster0-div9p.mongodb.net/test?retryWrites=true&w=majority'
//mongodb://localhost/amazona'mongodb+srv://gokul:Lagdmava@12345@cluster0-div9p.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://gokul:<password>@cluster0.div9p.mongodb.net/students?retryWrites=true&w=majority