import * as log4js from'log4js';

log4js.configure({
    appenders: {
        consoleAppenders: {
            type: 'console', layout: {
                type: 'pattern',
                pattern: '%[[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %c -%] %m',
            }
        },
        fileAppenders: {
            type: 'dateFile', filename: './logs/ec-shopping.log', pattern: '.yyyy-MM-dd-hh', compress: true, layout: {
                type: 'pattern',
                pattern: '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %c - %m',
            }
        }
    },
    categories: {
        default: { appenders: ['consoleAppenders', 'fileAppenders'], level: 'info' }
    }
});
const logger = log4js.getLogger('ec-shopping');

export {logger};