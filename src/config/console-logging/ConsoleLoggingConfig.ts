export const ConsoleLoggingConfig = (() => {
  const disableAllLevels = (): void => {
    console.trace = function () {};
    console.debug = function () {};
    console.log = function () {};
    console.info = function () {};
    console.warn = function () {};
    console.error = function () {};
  };

  const disableAllExceptErrors = (): void => {
    console.trace = function () {};
    console.debug = function () {};
    console.log = function () {};
    console.info = function () {};
    console.warn = function () {};
  };

  return (enableLogging = true) => {
    if (enableLogging) {
      // We want console-logging logging configuration per environment
      switch (import.meta.env.MODE) {
        case "production":
          disableAllExceptErrors();

          break;
        case "development":
          console.log("Environment: ", import.meta.env.MODE);

          break;
      }
    } else {
      // We don't want console-logging logging at all for all environments
      disableAllLevels();
    }
  };
})();
