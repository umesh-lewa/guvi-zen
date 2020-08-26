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
var PetAvailability = /** @class */ (function () {
    function PetAvailability() {
        this.availablePets = [];
        this.enquiries = [];
        this.dogCount = 0;
        this.catCount = 0;
        this.parrotCount = 0;
        this.availSwitch = true;
    }
    PetAvailability.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    PetAvailability.prototype.insertPets = function () {
        for (var index = 0; index < 5; index++) {
            if (index % 2 == 0) {
                this.availSwitch = true;
            }
            else {
                this.availSwitch = false;
            }
            this.availablePets.push(new Pet("Dog " + (index + 1), 'Dog', this.getRandomInt(10000, 19999), this.availSwitch));
            this.availablePets.push(new Pet("Cat " + (index + 1), 'Cat', this.getRandomInt(20000, 29999), this.availSwitch));
            this.availablePets.push(new Pet("Parrot " + (index + 1), 'Parrot', this.getRandomInt(30000, 39999), this.availSwitch));
        }
    };
    PetAvailability.prototype.getCountOfDifferentPets = function () {
        var _this = this;
        this.dogCount = 0;
        this.catCount = 0;
        this.parrotCount = 0;
        console.log("available pets length : " + this.availablePets.length);
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
    PetAvailability.prototype.getAvailablePets = function () {
        return this.availablePets;
    };
    return PetAvailability;
}());
var PetRequest = /** @class */ (function (_super) {
    __extends(PetRequest, _super);
    function PetRequest() {
        var _this = _super.call(this) || this;
        _this.totalRequestedPets = [];
        _this.availPets = _this.availablePets;
        return _this;
    }
    PetRequest.prototype.insertIncomingEnquiries = function (enquiry) {
        var _a;
        if (enquiry === void 0) { enquiry = []; }
        (_a = this.totalRequestedPets).push.apply(_a, enquiry);
    };
    PetRequest.prototype.getStatus = function () {
        console.log("inside get status method");
        //this.availPets = this.availablePets;
        //console.log(this.availablePets.length);
        //console.log(this.availablePets);
        console.log(this.availPets.length);
        console.log(this.availPets);
        for (var i = 0; i < 5; i++) {
            this.element = this.totalRequestedPets[i];
            //this.availPets = this.getAvailablePets;
            console.log("iterating through requsted pets");
            //console.log(this.availPets.length);
            for (var j = 0; j < this.availablePets.length; j++) {
                console.log("iterating through each evailable pet");
                if (this.availablePets[j].name == this.element.name) {
                    this.tempPet = this.element;
                    console.log("This pet is there in shop");
                    if (this.tempPet.currentStatus) {
                        console.log("This pet is available right now");
                    }
                    else {
                        console.log("This pet is not available right now");
                    }
                    console.log("current status : " + this.element.currentStatus);
                }
                else {
                    console.log("This pet is not there in shop");
                }
            }
        }
    };
    PetRequest.prototype.mapRequestData = function () {
        var _this = this;
        this.totalRequestedPets.forEach(function (element) {
            for (var j = 0; j < _this.availablePets.length; j++) {
                if (_this.availablePets[j].name == _this.element.name) {
                    _this.tempPet = _this.element;
                    _this.totalMatchedPets++;
                    if (_this.tempPet.currentStatus) {
                        _this.totalMatchedPetsAvailable++;
                    }
                    else {
                        //do nothing
                    }
                }
                else {
                    //do nothing
                }
            }
            console.log(_this.totalMatchedPets);
            console.log(_this.totalMatchedPetsAvailable);
        });
    };
    return PetRequest;
}(PetAvailability));
var Pet = /** @class */ (function () {
    function Pet(petName, petType, rfid, status) {
        this.name = petName;
        this.type = petType;
        this.RFID = rfid;
        this.currentStatus = status;
    }
    return Pet;
}());
var avail = new PetAvailability();
avail.insertPets();
avail.getCountOfDifferentPets();
var request = new PetRequest();
var insertPetRequests = [];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (var index = 0; index < 5; index++) {
    var availSwitch = true;
    if (index % 2 == 0) {
        availSwitch = true;
    }
    else {
        availSwitch = false;
    }
    insertPetRequests.push(new Pet("Dog " + (index + 1), 'Dog', getRandomInt(10000, 19999), availSwitch));
}
request.insertIncomingEnquiries(insertPetRequests);
request.getStatus();
