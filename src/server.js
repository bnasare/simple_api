import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

import mainRoutes from './main.routes.js';
import userRoutes from './user.routes.js';

const app = express();
const port = 3000

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 1 minute).
})

app.use(compression());
app.use(limiter);
app.use(express.json());
app.use(helmet());

app.use('/', mainRoutes);
app.use('/v1/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})