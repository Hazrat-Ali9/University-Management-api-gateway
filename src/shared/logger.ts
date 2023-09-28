import path from 'path';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new DailyRotateFile({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success', 'success-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      level: 'info'
    }),
    new DailyRotateFile({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error', 'error-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      level: 'error'
    }),
    new winston.transports.Console({
      stderrLevels: ['error']
    })
  ]
});

export default logger;
