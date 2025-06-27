const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../logs', `app-${new Date().toISOString().slice(0, 10)}.log`);
function writeLog(type, req, message) {
  const logData = {
    type,
    time: new Date().toISOString(),
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    body: req.body,
    message,
  };

  fs.mkdirSync(path.dirname(logFile), { recursive: true });
  fs.appendFileSync(logFile, JSON.stringify(logData) + '\n', 'utf8');
}
const loggerMiddleware = (req, res, next) => {
  writeLog('REQUEST', req, 'Incoming request');
  next();
};

const logSuccess = (req, message) => {
  writeLog('SUCCESS', req, message);
};

const logError = (req, message) => {
  writeLog('ERROR', req, message);
};

module.exports = {
  loggerMiddleware,
  logSuccess,
  logError
};
