class MagicBallManager { // класс скрыт снаружи благодаря вызову export default

    _magicBallSelector = ""//создаем переменную
    _img;
    _imgLeft;
    _imgTop;
    _ballSpeed = 15;
    _deltaX;
    _deltaY;
    _domRootElement = document.getElementsByTagName("body")[0];
    _minX = this._domRootElement.clientLeft;
    _minY = this._domRootElement.clientTop;
    _maxX = this._domRootElement.clientWidth + this._minX;
    _maxY = this._domRootElement.clientHeight + this._minY;
    _isOutScreenWalls = false;

    /**
     * @property
     * @param isOutScreenWalls
     */
    setOutScreenWalls(isOutScreenWalls) {
        this._isOutScreenWalls = isOutScreenWalls;
    }

    /**
     * @property
     * @returns number
     */
    getBallSpeed(){
        return this._ballSpeed;
    }

    /**
     * @property
     * @param ballSpeed number
     */
    setBallSpeed(ballSpeed){
        this._ballSpeed = ballSpeed / 10;
    }

    setRandomDirection(){
        let angle = Math.random() * 360;
        console.log(angle);
        this._deltaX = Math.cos(angle) * this._ballSpeed;
        this._deltaY = Math.sin(angle) * this._ballSpeed;
    }

    /**
     *
     * @param className string
     * @function
     */
    StartDom(className) { // публичный метод
        let imgs = document.getElementsByClassName(className)

        if (imgs.length !== 1) {
            console.error("MagicBallManager startDom. Wrong controllable images count");
        }

        this._img = imgs[0];
        this._imgLeft = this._img.offsetLeft;
        this._imgTop = this._img.offsetTop;
        const leftStyle = "left:" + this._imgLeft + "px"
        const topStyle = "top:" + this._imgTop + "px"
        this._img.setAttribute("style", leftStyle + ";" + topStyle);

        setInterval(this._MoveMagicBall, 100, this)
    }

    /**
     * @private
     * @function
     * @property _this MagicBallManager
    **/
    _MoveMagicBall(_this){
        _this._imgLeft = _this._imgLeft + _this._deltaX;
        _this._imgTop = _this._imgTop + _this._deltaY;
        const leftStyle = "left:" + _this._imgLeft + "px"
        const topStyle = "top:" + _this._imgTop + "px"
        _this._img.setAttribute("style", leftStyle + ";" + topStyle);

        if (_this._isOutScreenWalls){
            _this._MagicBallScreenBounce()
        }
    }

    /**
     * @function
     * @private
     */
    _MagicBallScreenBounce(){
        console.log("MagicBallScreenBounce", this);

        if ((this._imgLeft <  this._minX) || (this._imgLeft > this._maxX - 50)) {
            this._deltaX *= -1;
        }
        if ((this._imgTop <  this._minY) || (this._imgTop > this._maxY - 50)) {
            this._deltaY *= -1;
            
        }
    }
}

export default new MagicBallManager(); // экспортируем экземпляр класса MagicBallManager как
                                        // подключаемый по умолчанию объект модуля