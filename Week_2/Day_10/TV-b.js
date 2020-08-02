class TV{

    constructor(brand,channel=1,price,inches,onOFF,volume=50 ){
        this.brand=brand;
        this.channel=channel;
        this.price=price;
        this.inches=inches;
        this.onOFF=onOFF;
        this.volume=volume;
    }
    VolumeCondition(vol)
    {
        if(vol>0 && vol<100)
        {
            this.volume=vol;
        }
        console.log(this.volume);
    }
    ChannelStatus(chan)
    {
        if(chan>50)
        {
            this.channel=chan;

        }
        console.log(this.channel);

    }
    reset(c,v)
    {
        if(c !=1 && v!=50)
        {

            this.channel=1;
            this.volume=50;
        }

            console.log(this.channel+" "+this.volume);

    }
    printInfo()
    {

        console.log(this.brand+" at channel "+this.channel+", volume "+this.volume );
    }



}
class LED extends TV{

    constructor(ScreenThickness,EnergyUsage,Lifespan,RefreshRate)
    {

        this.ScreenThickness=ScreenThickness;
        this.EnergyUsage=EnergyUsage;
        this.Lifespan=Lifespan;
        this.RefreshRate=RefreshRate;
    }
viewingAngle(angle){
    this.angle=angle;
console.log(this.angle);
}
backlight(light){
    this.light=light;
    console.log(this.light);
}
DisplayDetails(detail){
    this.detail=detail;
    console.log(this.detail);

}


}