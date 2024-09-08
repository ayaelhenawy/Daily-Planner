import express from 'express'
import { dbConnections } from './Database/dbConnection.js';
import { userRouter } from './src/modules/user/user.router.js';
const app = express()
app.use(express.json())
app.use(userRouter)
dbConnections();
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log(`Server is running...`))