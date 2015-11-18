import Koa from 'koa'

import database from './database'
import { port } from '../config/environment'

const app = new Koa()

app.listen(port, () => console.log(`Koa server listening on port ${port}`))
