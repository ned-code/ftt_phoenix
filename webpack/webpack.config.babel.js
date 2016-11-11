import devConf from './development.js';
import prodConf from './production.js';

const env = process.env.NODE_ENV || 'development';
const isDevelopment = env === 'development';

module.exports = isDevelopment ? devConf : prodConf;
