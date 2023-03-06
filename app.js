
import express from 'express';
import mongoose from 'mongoose';
import User from './model/user.js';
import userRoutes from './routes/user-routes.js';

const uri = 'mongodb+srv://farhanfm177:xsqj1FyJVZzlCtEV@cluster0.vpqvbgm.mongodb.net/cafemate?retryWrites=true&w=majority';

const app = express();

app.use(express.json());

app.use("/users", userRoutes);


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error(err);
  });





app.listen(3000, () => {
  console.log("Example app on port 3000!");
});



