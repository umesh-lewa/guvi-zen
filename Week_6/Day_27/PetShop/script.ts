class TV {
    brand: string;
    channel: number;
    price: number;
    inches: number;
    onOffStatus: boolean;
    volume: number;

    constructor(brand: string) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }

    increaseVolume() {
        if (this.volume != 100) {
            this.volume++;
        } else {
            console.log("Volume is already 100, cannot be increased further");
        }
    }

    decreaseVolume() {
        if (this.volume != 0) {
            this.volume--;
        } else {
            console.log("Volume is already 0, cannot be decreased further");
        }
    }

    setChannel(targetChannel: number) {
        if (targetChannel <= 50) {
            this.channel = targetChannel;
        } else {
            console.log("Please enter channel number between 1 and 50")
        }
    }

    setVolume(targetVolume: number) {
        if (targetVolume <= 100 && targetVolume >= 0) {
            this.volume = targetVolume;
        } else {
            console.log("Please Give volume between 0 and 100");
        }
    }

    resetTV() {
        this.channel = 1;
        this.volume = 50;
    }

    getStatus() {
        console.log(this.brand + " TV at channel " + this.channel + ", volume " + this.volume);
    }
}

class LEDTV extends TV {
    screenThickness: number;
    energyUsage: number;
    lifespan: number;
    refreshRate: number;
    viewingAngle: number;
    backlight: boolean;

    constructor(brand: string, viewingAngle: number, backlight: boolean, screenthickness: number, refreshRate: number) {
        super(brand);
        this.screenThickness = screenthickness;
        this.refreshRate = refreshRate;
        this.viewingAngle = viewingAngle;
        this.backlight = backlight;
    }

    getDisplayDetails() {
        console.log(this.brand + " TV with Viewing Angle of " + this.viewingAngle + " "+"degrees, screen thickness of " + this.screenThickness + " inches, refresh rate of " + this.refreshRate + " hertz, and backlight of " + this.backlight);
    }
}

class PlasmaTV extends TV {
    screenThickness: number;
    energyUsage: number;
    lifespan: number;
    refreshRate: number;
    viewingAngle: number;
    backlight: boolean;

    constructor(brand: string, viewingAngle: number, backlight: boolean, screenthickness: number, refreshRate: number) {
        super(brand);
        this.screenThickness = screenthickness;
        this.refreshRate = refreshRate;
        this.viewingAngle = viewingAngle;
        this.backlight = backlight;
    }

    getDisplayDetails() {
        console.log(this.brand + " TV with Viewing Angle of " + this.viewingAngle + " "+"degrees, screen thickness of " + this.screenThickness + " inches, refresh rate of " + this.refreshRate + " hertz, and backlight of " + this.backlight);
    }

}

let tv = new TV("LG");
tv.setChannel(5);
tv.increaseVolume();
tv.decreaseVolume();
tv.setVolume(67);
tv.getStatus();
tv.resetTV();

let ledTv = new LEDTV("Panasonic", 180, true, 2, 60);
ledTv.getDisplayDetails();

let plasmaTV = new PlasmaTV("Sony", 240, false, 2.5, 144);
plasmaTV.getDisplayDetails();

