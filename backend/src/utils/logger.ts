import pino from "pino";

const logger = pino({
    prettyPrint: {
        ignore: 'pid,hostname'
    }
})
export default logger

