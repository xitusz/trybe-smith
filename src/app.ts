import express from 'express';

import Routers from './routers';

const app = express();

app.use(express.json());

app.use(Routers.Product);
app.use(Routers.User);
app.use(Routers.Order);
app.use(Routers.Login);

export default app;
