import express, {
  Request,
  Response,
  NextFunction,
  json,
  Application
} from 'express'
import cors from 'cors'
import path from 'path'
import helmet from 'helmet'
import morgan from 'morgan' // request logger
import { apiRoutes } from './routes'
// import apiRoutes from './routes/api'

import { requestLogger } from './middlewares/requestLogger'
import { app_paths } from './configs/paths'
import { runInNewContext } from 'vm'

const app: Application = express()

// security
app.disable('x-powered-by')
app.use(helmet())

// middleware
app.use(cors())
// parse request.body
app.use(json())

// logs
app.use(morgan('common', { stream: requestLogger }))

// routes
app.use('/api', apiRoutes)

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(app_paths.client_prod_folder))

  // Handle React routing, return all requests to React app
  app.get('/', function(req: Request, res: Response, next: NextFunction) {
    res.sendFile(app_paths.client_prod_indexFile)
  })
} else if (process.env.NODE_ENV === 'development') {
  console.info(`Run 'npm run start:client' to start your 'client' application`)
} else {
  console.error(
    `The environment flag ${process.env.NODE_ENV} is not recognized!`
  )
}

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  error = new Error()

  res
    .status(error.status || 500)
    .json({ error: error.message || 'Something went wrong' })
})

export default app
