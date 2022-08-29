import pino from "pino";
import pretty from "pino-pretty";

const log = pino(
  pretty({
    colorize: true,
    translateTime: "UTC:yy-mm-dd HH:MM:ss.l",
    // messageFormat: false,
    ignore: "pid,hostname",
  })
);

export default log;
