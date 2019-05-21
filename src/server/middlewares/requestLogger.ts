import fs from 'fs'
import rfs from 'rotating-file-stream'
import { app_paths } from '../configs/paths'

// ensure log directory exists
fs.existsSync(app_paths.logger_folder) || fs.mkdirSync(app_paths.logger_folder)

export const requestLogger = rfs('access.log', {
  interval: '1d', // rotate daily
  path: app_paths.logger_folder
})
