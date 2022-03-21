
const config = {
    supports_search: false,
    supports_group_request: false,
    supported_resolutions: ["1", "5", "15", "30", "60", "1D", "1W"],
    supports_marks: false,
    supports_time: true,
    exchanges: {
        value: "",
        name: "All Exchanges",
        desc: ""
    }
}

let dataFeed = {
    onReady: (cb) => {
        console.log('表格数据初始化')
        // setTimeout(() => cb(config), 0);
        cb(config)
    },
    resolveSymbol: (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
        var symbol_stub = {
            name: symbolName,
            description: "",
            has_intraday: true,
            has_no_volume: false,
            minmov: 1,
            minmov2: 2,
            pricescale: 100,
            session: "24x7",
            supported_resolutions: ["1", "5", "15", "30", "60", "1D", "1W"],
            ticker: symbolName,
            timezone: "Asia/Shanghai",
            type: "stock"
        }
        setTimeout(() => onSymbolResolvedCallback(symbol_stub), 0);
    },
    timer: null,
    getBars: (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) => {
        this.timer = setInterval(() => {
            // 获取
        }, 100)
    },
    subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {

    },
    unsubscribeBars: () => {

    },
    getServerTime: (callback) => {
        // 没有毫秒
        callback(1445324591)
    }
}

export default dataFeed