class TV{
    brand:string;
    channel:number;
    price:number;
    inches:number;
    onOffStatus:boolean;
    volume:number;

    constructor(brand:string){
        this.brand= brand;
        this.channel = 1;
        this.volume = 50;
    }

    increaseVolume(){
        if(this.volume != 100){
            this.volume++;
        }else{
            console.log("Volume is already 100, cannot be increased further");
        }
    }

    decreaseVolume(){
        if(this.volume != 0){
            this.volume--;
        }else{
            console.log("Volume is already 0, cannot be decreased further");
        }
    }

    setChannel(targetChannel:number){
        if(targetChannel <= 50){
            this.channel = targetChannel;
        }else{
            console.log("Please enter channel number between 1 and 50")
        }
    }

    setVolume(targetVolume:number){
        if(targetVolume <= 100 && targetVolume >= 0){
            this.volume = targetVolume;
        }else{
            console.log("Please Give volume between 0 and 100");
        }
    }

    resetTV(){
        this.channel = 1;
        this.volume = 50;
    }

    getStatus(){
        console.log(this.brand + "TV at channel" +this.channel + ", volume "+this.volume);
    }
}

class LEDTV extends TV{

    constructor(){
        super();
    }
}

class PlasmaTV extends TV{

    constructor(){
        super(){

        }
    }

}

let tv = new TV("LG");
tv.setChannel(5);
tv.increaseVolume();
tv.decreaseVolume();
tv.setVolume(67);
tv.getStatus();
tv.resetTV();