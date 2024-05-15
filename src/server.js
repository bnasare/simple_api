import express from 'express';

import userRoutes from './user.routes.js';

const app = express();
const port = 3000

app.use(express.json());

app.use('/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})