import express from 'express';
import approutes from './routes.js';

const app = express();
const port = 3000

app.use(express.json());

app.use('/v1', approutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})