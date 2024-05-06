class PlatformManager {
    /**
     *
     * @type {string}
     * @private
     */
    _playerPlatformSelector = undefined;

    /**
     *
     * @param {MouseEvent} event
     * @private
     */
    _onMouseMove(event){
        const topStyle = "top:" + event.pageY - (150/2) + "px"
        _this._img.setAttribute("style", leftStyle + ";" + topStyle);
        console.log("onMouseMove", event);
    }
    /**
     *
     * @param {string} selector
     * @function
     */
    AddPlayerPlatform(selector) {
        this._playerPlatformSelector = selector;
    }

    RegisterPageEvents(){
        document.getRootNode().addEventListener("mousemove", this._onMouseMove)
    }
}

export default new PlatformManager();