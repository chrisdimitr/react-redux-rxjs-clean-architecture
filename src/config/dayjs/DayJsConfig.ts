import { extend, locale } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export const DayJsConfig = (() => {
  return () => {
    extend(utc);
    extend(timezone);

    locale();
  };
})();
