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

    handleOnMessage = (message) => {
        const { data: d } = message;
        const data = JSON.parse(d);
        const { stream, data: streamData } = data || {}
        if (stream && this.subscribers[stream] && streamData) {
            this.subscribers[stream].forEach(subscribe => subscribe.callback(streamData))
        }
    }
    getWs() {

    }

    closeWs() {

    }

    openWs() {
        if (this.ws) {
            this.ws.close();
        }
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

    subscribe = (callback, symbols, stream) => {
        const streams = [];
        symbols.forEach(symbol => {
            const subStream = symbol.replace('/', '').toLowerCase() + '@' + stream;
            if (this.subscribers[subStream]) {
                this.subscribers[subStream].push({
                    hashCode: hashCode(callback),
                    callback,
                })
            } else {
                this.subscribers[subStream] = [{
                    hashCode: hashCode(callback),
                    callback,
                }]
            }

            streams.push(subStream);
        })

        this.addStreams(streams);
    }

    addStreams(streams) {
        let updateWs = '';
        streams.forEach(stream => {
            if (!this.currentStream.match(new RegExp(stream, 'g'))) {
                updateWs += stream + '/';
            }
        })

        if (updateWs) {
            this.currentStream += updateWs.replace(/\/$/,'');
            console.log(this.currentStream);
            this.openWs();
        }

    }
}

const instance = new BinanceWs();
export default instance;
