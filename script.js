function Clock(clockNode, fullFormat = true) {
    this.formatFull = fullFormat;
    this.clockNode = clockNode;
    clockNode.addEventListener('click', () => {
        this.formatFull = !this.formatFull;
    });
}

Clock.prototype.render = function () {
    let time = new Date().toTimeString().split(' ')[0];

    if (!this.formatFull) {
        time = new Date().toTimeString().split(' ')[0].substring(0,5);
    }

    this.clockNode.innerHTML = time;
}

Clock.prototype.start = function () {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
}

Clock.prototype.stop = function () {
    clearInterval(this.timer);
}

Clock.prototype.setFormat = function (format = 'full') {
    this.formatFull = format === 'short' ? false : true;
}

// Short Clock
function ShortClock(clockNode, fullFormat) {
    Clock.call(this, clockNode, fullFormat);
}

ShortClock.prototype = Object.create(Clock.prototype);
ShortClock.prototype.constructor = ShortClock;
ShortClock.prototype.render = function () {
    let time = new Date().toTimeString().split(' ')[0];

    if (!this.formatFull) {
        time = new Date().toTimeString().split(' ')[0].substring(0,5);
    }

    this.clockNode.innerHTML = time;
}

// Full Clock
function FullClock(clockNode, fullFormat) {
    Clock.call(this, clockNode, fullFormat);
}

FullClock.prototype = Object.create(Clock.prototype);
FullClock.prototype.constructor = FullClock;
FullClock.prototype.render = function () {
    let time = new Date().toTimeString().split(' ')[0];

    if (!this.formatFull) {
        time = new Date().toTimeString().split(' ')[0].substring(0,5);
    }

    this.clockNode.innerHTML = time;
}

const clock = new Clock(document.querySelector('#clock'));
const shortClock = new ShortClock(document.querySelector('#shortClock'), false);
const fullClock = new FullClock(document.querySelector('#fullClock'));

clock.start();
shortClock.start();
fullClock.start();
