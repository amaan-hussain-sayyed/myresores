// app.js
import express from 'express';
import userRoute from './routes/user.route';

const app = express();

app.use(express.json());
app.use('/api/users', userRoute);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});