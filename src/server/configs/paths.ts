import path from 'path'

export const app_paths = {
  logger_fileName: 'access.log',
  logger_folder: path.join(__dirname, '..', 'logs'),
  client_prod_indexFile: path.join(__dirname, '../public', 'index.html'),
  client_prod_folder: path.join(__dirname, '../public')
}
