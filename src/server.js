import express from 'express';

import mainRoutes from './main.routes.js';
import userRoutes from './user.routes.js';

const app = express();
const port = 3000

app.use(express.json());

app.use('/', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})