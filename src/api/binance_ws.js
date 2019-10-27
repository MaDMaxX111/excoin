import config from './binance_config';
import { hashCode } from  '../utils/common';
class BinanceWs {
    constructor() {
        this.ws = false;
        this.subscribers = [];
        this.currentStream = '';
    }
    handleSocketOpen(...rest) {
        console.log(rest)
    }
    handleSocketClose(...rest) {
        console.log(rest)
    }
    handleOnError(...rest) {
        console.log(rest)
    }

    handleOnMessage(message) {
        console.log(message)
    }
    getWs() {

    }

    closeWs() {

    }

    openWs() {
        this.ws = new WebSocket(config.stream + this.currentStream);
        this.ws.onclose = this.handleSocketClose;
        this.ws.onerror = this.handleOnError;
        this.ws.onmessage = this.handleOnMessage;
        this.ws.onopen = this.handleSocketOpen;
    }

    unsubscribe(callback) {
        this.subscribers.push({
            hashCode: hashCode(callback),
            callback,
        })
    }

    subscribe(callback, symbols, stream) {
        if (this.subscribers[stream]) {
            this.subscribers[stream].push({
                hashCode: hashCode(callback),
                callback,
            })
        } else {
            this.subscribers[stream] = [{
                hashCode: hashCode(callback),
                callback,
            }]
        }

        this.addStream(symbols, stream);
    }

    addStream(symbols, stream) {
        let str = '';
        symbols.forEach(symbol => {
            str += symbol.replace('/', '') + '@' + stream + '/';
        })
        console.log(this.currentStream);
        console.log(str);

    }
}

const instance = new BinanceWs();
export default instance;
