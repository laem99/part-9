import express from 'express';
import diagnoseRouter from './routes/diagnosesRoute';
import patientsRoute from './routes/patientsRoute';
const app = express();
app.use(express.json());
app.use(express.static('build'));

const PORT = 3000;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/diagnoses', diagnoseRouter);

app.use('/api/patients', patientsRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});