import logger from 'bunyan-request-logger';
import settings from 'server/settings';

const loggerSettings = {
  name: settings.APP_NAME,
  logParams: settings.LOG_PARAMS || undefined // so we don't pollute logs.
};

export default logger(loggerSettings);
