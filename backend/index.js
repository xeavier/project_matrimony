import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'cookie-session';
import cors from 'cors';
import config from './config';

import userRoute from './routes/userRoute.js';
import profileRoutes from './routes/profileRoutes';
import preferenceRoutes from './routes/preferenceRoutes';
//import uploadRoute from './routes/uploadRoute.js';
import categoryRoutes from './routes/categoryRoutes';
import linkRoutes from './routes/linkRoutes';
import buttonRoutes from './routes/buttonRoutes';
import paymentMethodsRoutes from './routes/paymentMethodsRoutes';
import sellers from './routes/stripe/sellers.js';
import customers from './routes/stripe/customers.js';

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

const app = express();
app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Enable sessions using encrypted cookies
app.use(cookieParser(config.secret));
app.use(
  session({
    cookie: {maxAge: 60000},
    secret: config.secret,
    signed: true,
    resave: true,
  })
);

//app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/profiles', profileRoutes);
app.use('/api/preferences', preferenceRoutes);
// app.use('/api/customers', customers);
// app.use('/api/links', linkRoutes);
// app.use('/api/buttons', buttonRoutes);
// app.use('/api/paymentMethodsRoutes', paymentMethodsRoutes);
// app.use('/api/categories', categoryRoutes);
app.get('/seller', (req, res) => {
    res.send("stores");
});

app.listen(config.PORT, () => {
	console.log('Server started at http://localhost:5000');
  });
