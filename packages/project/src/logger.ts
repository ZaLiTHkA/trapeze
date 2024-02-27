import debugFactory from "debug";

export class Logger {
  static debug(...args: any[]) {
    if(process.env.VERBOSE !== 'false') {
      debugFactory("project:debug")(args);
    }
  }

  static v(source: string, operation: string, ...args: any[]) {
    debugFactory(`project:${source}`)(operation, ...args);
  }

  static log(...args: any[]) {
    debugFactory("project:log")(args);
  }

  static warn(...args: any[]) {
    debugFactory("project:warn")(args);
  }

  static error(...args: any[]) {
    debugFactory("project:error")(args);
  }
}
