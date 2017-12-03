export default function loggerConfig(overrides = {}) {
  return Object.assign(
    {
      level: process.env.LOGGER_LEVEL || 'info',
      enabled: process.env.LOGGER_ENABLED
    },
    overrides
  );

}
