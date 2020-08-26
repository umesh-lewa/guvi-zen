var PetAvailability = /** @class */ (function () {
    function PetAvailability() {
        this.availablePets = [];
        this.enquiries = [];
        this.dogCount = 0;
        this.catCount = 0;
        this.parrotCount = 0;
    }
    PetAvailability.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    PetAvailability.prototype.insertPets = function () {
        for (var index = 0; index < 5; index++) {
            this.availablePets.push(new Pet("Dog " + (index + 1), 'Dog', this.getRandomInt(10000, 19999)));
            this.availablePets.push(new Pet("Cat " + (index + 1), 'Cat', this.getRandomInt(20000, 29999)));
            this.availablePets.push(new Pet("Parrot " + (index + 1), 'Parrot', this.getRandomInt(30000, 39999)));
        }
    };
    PetAvailability.prototype.getCountOfDifferentPets = function () {
        var _this = this;
        this.dogCount = 0;
        this.catCount = 0;
        this.parrotCount = 0;
        this.availablePets.forEach(function (element) {
            if (element.type == "Dog") {
                _this.dogCount++;
            }
            else if (element.type == "Cat") {
                _this.catCount++;
            }
            else if (element.type == "Parrot") {
                _this.parrotCount++;
            }
        });
        console.log("dogCount : " + this.dogCount);
        console.log("catCount : " + this.catCount);
        console.log("parrotCount : " + this.parrotCount);
    };
    return PetAvailability;
}());
var PetRequest = /** @class */ (function () {
    function PetRequest() {
    }
    PetRequest.prototype.insertIncomingEnquiries = function () {
    };
    PetRequest.prototype.getStatus = function () {
        for (var i = 0; i < 5; i++) {
            console.log();
        }
    };
    return PetRequest;
}());
var Pet = /** @class */ (function () {
    function Pet(petName, petType, rfid) {
        this.name = petName;
        this.type = petType;
        this.RFID = rfid;
    }
    return Pet;
}());
var avail = new PetAvailability();
avail.insertPets();
avail.getCountOfDifferentPets();
