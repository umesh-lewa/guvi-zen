var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TV = /** @class */ (function () {
    function TV(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    TV.prototype.increaseVolume = function () {
        if (this.volume != 100) {
            this.volume++;
        }
        else {
            console.log("Volume is already 100, cannot be increased further");
        }
    };
    TV.prototype.decreaseVolume = function () {
        if (this.volume != 0) {
            this.volume--;
        }
        else {
            console.log("Volume is already 0, cannot be decreased further");
        }
    };
    TV.prototype.setChannel = function (targetChannel) {
        if (targetChannel <= 50) {
            this.channel = targetChannel;
        }
        else {
            console.log("Please enter channel number between 1 and 50");
        }
    };
    TV.prototype.setVolume = function (targetVolume) {
        if (targetVolume <= 100 && targetVolume >= 0) {
            this.volume = targetVolume;
        }
        else {
            console.log("Please Give volume between 0 and 100");
        }
    };
    TV.prototype.resetTV = function () {
        this.channel = 1;
        this.volume = 50;
    };
    TV.prototype.getStatus = function () {
        console.log(this.brand + "TV at channel " + this.channel + ", volume " + this.volume);
    };
    return TV;
}());
var LEDTV = /** @class */ (function (_super) {
    __extends(LEDTV, _super);
    function LEDTV(brand, viewingAngle, backlight, screenthickness, refreshRate) {
        var _this = _super.call(this, brand) || this;
        _this.screenThickness = screenthickness;
        _this.refreshRate = refreshRate;
        _this.viewingAngle = viewingAngle;
        _this.backlight = backlight;
        return _this;
    }
    LEDTV.prototype.getDisplayDetails = function () {
        console.log(this.brand + "TV with Viewing Angle of " + this.viewingAngle + " " + "degrees, screen thickness of " + this.screenThickness + " inches, refresh rate of " + this.refreshRate + " hertz, and backlight of " + this.backlight);
    };
    return LEDTV;
}(TV));
var PlasmaTV = /** @class */ (function (_super) {
    __extends(PlasmaTV, _super);
    function PlasmaTV(brand, viewingAngle, backlight, screenthickness, refreshRate) {
        var _this = _super.call(this, brand) || this;
        _this.screenThickness = screenthickness;
        _this.refreshRate = refreshRate;
        _this.viewingAngle = viewingAngle;
        _this.backlight = backlight;
        return _this;
    }
    PlasmaTV.prototype.getDisplayDetails = function () {
        console.log(this.brand + "TV with Viewing Angle of " + this.viewingAngle + " " + "degrees, screen thickness of " + this.screenThickness + " inches, refresh rate of " + this.refreshRate + " hertz, and backlight of " + this.backlight);
    };
    return PlasmaTV;
}(TV));
var tv = new TV("LG");
tv.setChannel(5);
tv.increaseVolume();
tv.decreaseVolume();
tv.setVolume(67);
tv.getStatus();
tv.resetTV();
var ledTv = new LEDTV("Panasonic", 180, true, 2, 60);
ledTv.getDisplayDetails();
var plasmaTV = new PlasmaTV("Sony", 240, false, 2.5, 144);
plasmaTV.getDisplayDetails();
