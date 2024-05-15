import { $ } from '@wdio/globals'

class Logger {
    async info(message) {
        console.log(`[INFO] ${message}`);
    }

    async error(message) {
        console.error(`[ERROR] ${message}`);
    }

    async warn(message) {
        console.warn(`[WARN] ${message}`);
    }
}

export default new Logger();