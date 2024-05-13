import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).send('Hello World!');
})

app.post('/', (req, res) => {
    res.status(StatusCodes.CREATED).send('Hello Benedict!');
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})