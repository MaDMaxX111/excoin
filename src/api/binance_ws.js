import config from './binance_config'

class BinanceWs {
    constructor() {
        this.ws = false;
    }
    handleSocketOpen() {

    }

    handleOnError() {

    }

    handleOnError() {

    }
    handleOnMessage(message) {
        console.log(message)
    }
    getWs() {

    }

    closeWs() {

    }

    openWs() {
        this.ws = new WebSocket(config.stream + 'bnbbtc@depth');
        this.ws.onclose = this.handleSocketOpen;
        this.ws.onerror = this.handleOnError;
        this.ws.onmessage = this.handleOnMessage;
        this.ws.onopen = this.handleSocketOpen;
    }

    subscribe() {

    }
}

const instance = new BinanceWs();
export default instance;