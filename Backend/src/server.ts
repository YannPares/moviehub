import express from 'express'
import userRoutes from './routes/user.routes'
import movieRouter from './routes/movie.routes'

const app = express();
app.use(express.json());

app.use('/', userRoutes)
app.use('/users', userRoutes)
app.use('/movie', movieRouter)

export default app;

