/**
 * 初始化websocket
 */
function initWs() {
    let websocket = window.WebSocket || window.MozWebSocket
    if (typeof websocket === 'function') {
        websocket = new WebSocket('ws://localhost:8080')

        websocket.onopen = function () {
            console.log('onopen事件---建立连接')
            websocket.send('is open');
        }
        websocket.onclose = function () {
            console.log('onclose事件---连接关闭')
            websocket.close();
        }
        websocket.onmessage = function () {
            console.log('收到')
        }
        return websocket
    } else {
        alert('浏览器不支持Websocket通信协议,请使用Chrome浏览器')
    }
}

export default initWs